export default defineEventHandler(async (event) => {

    // 使用 untils 的共用模組
    const db = event.context.cloudflare.env.DB;

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