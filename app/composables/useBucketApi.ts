/**
 * R2 Bucket API 操作 composable
 * 將 $fetch 集中管理，頁面只呼叫函數
 */
export const useBucketApi = () => {

    /** 上傳檔案 */
    const upload = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        return await $fetch('/api/bucket/upload', {
            method: 'POST',
            body: formData,
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
