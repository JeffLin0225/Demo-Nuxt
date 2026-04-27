import type { H3Event } from "h3";

export function useD1(event: H3Event) {

    // 抓取 db物件 資訊 from wrangler.json
    return event.context.cloudflare.env.DB;
}