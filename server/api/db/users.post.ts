import {useD1} from "~/utils/dbRepo";

export  default  defineEventHandler(async (event)=> {

    // 使用 untils 的共用模組
    const db = useD1(event)

    const body = await readBody(event);
    if (!body.user_name || !body.user_email) {
        throw  createError({
            statusCode: 400,
            statusMessage: 'user_name and user_email are required',
        });
    }

    try {
        const result = await db.prepare(' INSERT INTO users (user_name, user_email) VALUES (?,?) ')
            .bind(body.user_name, body.user_email)
            .run();

        return {
            success: true,
            message: 'User created successfully.',
            result
        }
    } catch (err:any) {
        throw createError({
            statusCode: 500,
            statusMessage: err.message,
        })
    }

})