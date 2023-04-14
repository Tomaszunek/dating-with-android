import { createTRPCRouter } from "~/server/api/trpc";
import { androidUserRouter } from "./routers/AndroidUsers";
import { androidChatAIRouter } from "./routers/Chat";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  androidUserRouter,
  androidChatAIRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
