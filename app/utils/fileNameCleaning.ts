export const fileNameCleaning = (fileName: string): string => {

    if (!fileName) return '';

    // 1. 移除路徑字元（防止 Directory Traversal 攻擊）
    let cleanName = fileName.replace(/^.*[\\\/]/, '');

    // 2. 空白轉連字號
    cleanName = cleanName.replace(/\s+/g, '-');

    // 3. 只保留安全字元（英數字、中文、點、連字號、底線）
    cleanName = cleanName.replace(/[^a-zA-Z0-9.\-_\u4e00-\u9fa5]/g, '');

    return cleanName;
};

// 使用者上傳的檔名可能包含 ../../etc/passwd 這種惡意路徑，清洗後可以確保安全。