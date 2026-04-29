import type {H3Event} from "h3";

export const useAi = (event: H3Event) => {
    return event.context.cloudflare.env.AI;
}