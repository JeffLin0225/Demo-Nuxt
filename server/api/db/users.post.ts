import { useDB } from "../../../app/utils/useDB";

/**
 * 新增使用者
 * */
export default defineEventHandler(async (event) => {

    // 使用 untils 的共用模組
    const db = useDB(event)

    const body = await readBody(event) || {};
    const userName = typeof body.user_name === 'string' ? body.user_name.trim() : '';
    const userEmail = typeof body.user_email === 'string' ? body.user_email.trim() : '';

    if (!userName || !userEmail) {
        throw createError({
            statusCode: 400,
            statusMessage: 'user_name and user_email are required',
        });
    }

    try {
        const result = await db.prepare(' INSERT INTO users (user_name, user_email) VALUES (?,?) ')
            .bind(userName, userEmail)
            .run();

        return {
            success: true,
            message: 'User created successfully.',
            result
        }
    } catch (err: any) {
        throw createError({
            statusCode: 500,
            statusMessage: err.message,
        })
    }

})