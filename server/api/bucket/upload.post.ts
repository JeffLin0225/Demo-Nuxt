import {useBucket} from "~/utils/useBucket";
import {fileNameCleaning} from "~/utils/fileNameCleaning";

/**
 * 上傳檔案
 * */
export default defineEventHandler(async (event) => {

    const bucket = useBucket(event);

    // 讀設定檔
    const config = useRuntimeConfig(event);
    const maxSize = Number(config.fileUploadMaxSize);

    const contentLength = Number(getHeader(event, 'content-length') || 0);
    if (contentLength > maxSize) {
        throw createError({statusCode: 413 , statusMessage: `檔案超過： ${ maxSize /1024 / 1024 }MB 限制`})
    }

    const formData = await readFormData(event);
    const file = formData.get('file') as File;

    if (!file || file.size == 0 ) {
        throw createError({statusCode: 413 , statusMessage: '請選擇檔案'})
    }

    if (file.size > maxSize) {
        throw createError({statusCode: 413 , statusMessage: '檔案超過 5MB 限制!!!'})
    }

    // 檔名清洗
    const safeFileName = fileNameCleaning(file.name);
    const key = `${Date.now()}-${safeFileName}`;

    // 上傳檔案
    try {
        await bucket.put(key , file , {
            httpMetadata: {
                contentType: file.type,
            }
        });

        return {
            success: true,
            key,
            originalName: file.name,
            size: file.size,
        }
    } catch (error) {
        console.error(error);
        throw createError({ statusCode: 500, statusMessage: `上傳失敗`})
    }




})