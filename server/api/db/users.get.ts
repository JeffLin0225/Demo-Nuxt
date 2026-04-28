import {useDB} from "~/utils/useDB";

/**
 * 查詢所有使用者
 * */
export default defineEventHandler(async (event) => {

    // 使用 untils 的共用模組
    const db = useDB(event);

    try {

        const {results} = await db.prepare(' SELECT * FROM users ORDER BY id DESC ')
            .all(); // 執行

        return {
            success: true,
            data: results
        };
    } catch(err:any) {

        return {
            success: false,
            message: err.message
        }
    }

});