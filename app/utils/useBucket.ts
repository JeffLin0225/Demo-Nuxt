import type { H3Event } from "h3";

export const useBucket = (event: H3Event) => {
    return event.context.cloudflare.env.MY_BUCKET;
} 