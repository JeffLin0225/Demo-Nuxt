import type {H3Event} from "h3";

export const useVectorize = (event: H3Event) => {
    return event.context.cloudflare.env.VECTORIZE;
}