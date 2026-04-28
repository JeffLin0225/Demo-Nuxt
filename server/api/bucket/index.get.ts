import {useBucket} from "~/utils/useBucket";

/**
 * 查看檔案 預設100筆
 * */
// server/api/files/index.get.ts
export default defineEventHandler(async (event) => {
    const bucket = useBucket(event);
    try {
        // 列出 bucket 中的所有物件
        const listed = await bucket.list({
            // prefix: '/',  // 只列出 uploads 目錄下的
            limit: 100,          // 每次最多 100 筆
        });
        const files = listed.objects.map((obj:any) => ({
            key: obj.key,
            size: obj.size,
            uploaded: obj.uploaded,       // 上傳時間
            httpMetadata: obj.httpMetadata,
        }));
        return {
            success: true,
            data: files,
            truncated: listed.truncated,  // 是否還有更多
        };
    } catch (err: any) {
        throw createError({ statusCode: 500, statusMessage: err.message });
    }
});