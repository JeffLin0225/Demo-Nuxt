import { useBucket } from "~/utils/useBucket";
import { fileNameCleaning } from "~/utils/fileNameCleaning";

/**
 * 上傳檔案 (優化版：使用 Streaming 串流上傳)
 * 不再使用 readFormData，避免大檔案卡在 Worker 記憶體
 * */
export default defineEventHandler(async (event) => {

    const bucket = useBucket(event);
    const config = useRuntimeConfig(event);
    const maxSize = Number(config.fileUploadMaxSize);

    // 1. 檢查內容長度 (初步攔截)
    const contentLength = Number(getHeader(event, 'content-length') || 0);
    if (contentLength > maxSize) {
        throw createError({ statusCode: 413, statusMessage: `檔案超過限制： ${maxSize / 1024 / 1024}MB` })
    }

    // 2. 從 Header 取得檔名與類型
    // 注意：前端發送時會使用 encodeURIComponent
    const rawFileName = getHeader(event, 'x-filename');
    const contentType = getHeader(event, 'content-type') || 'application/octet-stream';

    if (!rawFileName) {
        throw createError({ statusCode: 400, statusMessage: '缺少檔名 (x-filename header)' })
    }

    const fileName = decodeURIComponent(rawFileName);
    const safeFileName = fileNameCleaning(fileName);
    const key = `${Date.now()}-${safeFileName}`;

    // 3. 取得檔案內容
    // 改用 readRawBody(event, false) 來獲取原始二進位數據 (Buffer)
    // 這能避開 "ReadableStream has been locked" 的錯誤，且在 20MB 內效能依然很好
    const body = await readRawBody(event, false);

    if (!body) {
        throw createError({ statusCode: 400, statusMessage: '檔案內容為空' });
    }

    // 4. 開始上傳到 R2
    try {
        // 直接將 Buffer 傳給 R2
        await bucket.put(key, body, {
            httpMetadata: {
                contentType: contentType,
            }
        });

        return {
            success: true,
            key,
            originalName: fileName,
            size: body.length, // 使用實際讀取到的長度
        }
    } catch (error: any) {
        console.error('R2 Upload Error:', error);
        throw createError({
            statusCode: 500,
            statusMessage: `R2 上傳失敗: ${error.message || '未知錯誤'}`
        })
    }

})