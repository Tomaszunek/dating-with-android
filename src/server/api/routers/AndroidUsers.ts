import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const androidUserRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.androidUser.findMany();
  }),
});
