import { useDB } from "~/utils/useDB";
import { useVectorize } from "~/utils/useVectorize";
import { useAi } from "~/utils/useAi";

/**
 * 搜尋文件：D1 精確比對 + Vectorize AI 語意推薦
 *
 * curl "http://localhost:8788/api/vectors/search?q=前端框架"
 */
export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const q = (query.q as string || '');

    if (!q.trim()) {
        throw createError({ statusCode: 400, message: '請輸入搜尋關鍵字' });
    }

    console.log(`\n========== 搜尋開始 ==========`);
    console.log(`🔍 搜尋關鍵字: "${q}"`);

    const db = useDB(event);
    const vectorize = useVectorize(event);
    const ai = useAi(event);

    // ====== 1. D1 精確搜尋 ======
    let dbResults: any[] = [];
    try {
        console.log(`\n--- D1 精確搜尋 ---`);
        console.log(`SQL: SELECT * FROM documents WHERE content LIKE '%${q}%'`);

        const { results } = await db.prepare(
            "SELECT * FROM documents WHERE content LIKE ?1 ORDER BY created_at DESC LIMIT 10"
        )
            .bind(`%${q}%`)
            .all();
        dbResults = results || [];

        console.log(`✅ D1 找到 ${dbResults.length} 筆結果`);
        dbResults.forEach((doc: any, i: number) => {
            console.log(`   ${i + 1}. [${doc.id}] ${doc.content.substring(0, 50)}...`);
        });

    } catch (error: any) {
        console.error('❌ D1 搜尋錯誤:', error);
    }

    // ====== 2. Vectorize 語意搜尋 ======
    let aiResults: any[] = [];
    try {
        console.log(`\n--- Vectorize AI 語意搜尋 ---`);

        // (1) 搜尋詞轉向量
        console.log(`⏳ 呼叫 Workers AI (bge-m3) 轉換向量中...`);
        const embeddingResponse = await ai.run(
            "@cf/baai/bge-m3",
            { text: [q] }
        );
        console.log(`✅ Embedding 完成，維度: ${embeddingResponse.data[0].length}`);

        // (2) Vectorize 搜尋相似 5 筆
        console.log(`⏳ 向 Vectorize 查詢 topK=5 最相似向量...`);
        const matches = await vectorize.query(embeddingResponse.data[0], {
            topK: 5,
            returnMetadata: "all"       // 注意：是 returnMetadata 不是 returnMetaData
        });

        console.log(`✅ Vectorize 回傳 ${matches.matches.length} 筆結果:`);
        matches.matches.forEach((m: any, i: number) => {
            console.log(`   ${i + 1}. [${m.id}] score: ${m.score.toFixed(4)} | metadata: ${JSON.stringify(m.metadata)}`);
        });

        // (3) 用 id 去 D1 取完整內容
        const ids = matches.matches.map((m: any) => m.id);
        if (ids.length > 0) {
            console.log(`⏳ 用 ${ids.length} 個 ID 去 D1 撈原文...`);

            const placeholders = ids.map(() => "?").join(",");
            const { results } = await db.prepare(
                `SELECT * FROM documents WHERE id IN (${placeholders})`
            )
                .bind(...ids)
                .all();

            // 把相似度 score 合併進結果，依分數排序
            aiResults = (results || []).map((doc: any) => {
                const match = matches.matches.find((m: any) => m.id === doc.id);
                return { ...doc, score: match?.score || 0 };
            });
            aiResults.sort((a: any, b: any) => b.score - a.score);

            console.log(`✅ 最終 AI 推薦結果:`);
            aiResults.forEach((doc: any, i: number) => {
                console.log(`   ${i + 1}. score: ${doc.score.toFixed(4)} | ${doc.content.substring(0, 50)}...`);
            });
        } else {
            console.log(`⚠️ Vectorize 沒有找到任何相似結果`);
        }

    } catch (error: any) {
        console.error('❌ Vectorize 搜尋失敗:', error);
    }

    console.log(`\n========== 搜尋結束 ==========\n`);

    return {
        success: true,
        query: q,
        dbResults: {
            source: "D1（精確比對）",
            count: dbResults.length,
            data: dbResults,
        },
        aiResults: {
            source: "Vectorize（AI 語意推薦）",
            count: aiResults.length,
            data: aiResults,
        }
    };
});