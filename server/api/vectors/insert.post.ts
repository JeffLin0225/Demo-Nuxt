import { useDB } from "~/utils/useDB";
import { useVectorize } from "~/utils/useVectorize";
import { useAi } from "~/utils/useAi";

/**
 * 接收文字 → 轉成向量 (Embedding) → 存入 Vectorize Index
 * 
 * curl -X POST http://localhost:8788/api/vectors/insert \
  -H "Content-Type: application/json" \
  -d '{"content": "Nuxt 是基於 Vue 的全端框架", "category": "frontend"}'
 */

export default defineEventHandler(async (event) => {

    const body = await readBody(event);
    if (!body.content || body.content.trim() === '') {
        throw createError({ statusCode: 403, statusMessage: '請輸入文字內容' });
    }

    // 取得服務
    const db = useDB(event);
    const vector = useVectorize(event);
    const ai = useAi(event);

    // 產生唯一標籤
    const id = `doc-${Date.now()}`;

    //  === 核心步驟 ===
    try {

        // 用 Worker AI 把文字轉成向量 (embedding)
        // bge-large-zh-v1.5 會輸出 1024 維的數字陣列
        const embeddingResponse = await ai.run(
            "@cf/baai/bge-m3",
            {
                text: [body.content]
            }
        );

        const values = embeddingResponse.data[0]; // 取第一筆 (因為我們只傳了一段文字)

        // 將向量存進 vectorize
        const vectorResult = await vector.upsert([{
            id: id,
            values: values,
            metadata: {
                category: body.category || "general",  // 短標籤存 metadata
            }
        }])

        // 原始文字存進 D1
        await db.prepare(
            "INSERT INTO documents (id, content) VALUES (?, ?)"
        )
            .bind(id, body.content)
            .run();


        return {
            success: true,
            id: id,
            mutationId: vectorResult.mutationId,  // Vectorize 的非同步寫入 ID
            dimensions: values.length,             // 確認維度是 1024
        };

    } catch (err: any) {
        console.error('插入文件失敗:', err);
        throw createError({ statusCode: 500, message: '插入文件失敗' });
    }
})