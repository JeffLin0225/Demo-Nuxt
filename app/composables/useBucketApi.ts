/**
 * R2 Bucket API 操作 composable (優化版：使用 Streaming 上傳)
 * 將 $fetch 集中管理，頁面只呼叫函數
 */
export const useBucketApi = () => {

    /** 上傳檔案 (優化為直接發送二進位數據) */
    const upload = async (file: File) => {
        // 不再使用 FormData，直接發送 file
        // 檔名放在自定義 Header 中傳遞
        return await $fetch('/api/bucket/upload', {
            method: 'POST',
            headers: {
                'x-filename': encodeURIComponent(file.name),
                'content-type': file.type || 'application/octet-stream',
            },
            // 直接將 File 物件傳入 body，fetch 會處理為串流
            body: file,
        });
    };

    /** 取得檔案列表 */
    const getFileList = async () => {
        const result: any = await $fetch('/api/bucket/');
        return result.data || [];
    };

    return {
        upload,
        getFileList,
    };
};
