import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const androidUserRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.androidUser.findMany();
  }),
  getUserById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.androidUser.findUnique({
        where: {
          id: input.id,
        },
        include: {
          ProfileImages: true,
        },
      });
    }),
});
