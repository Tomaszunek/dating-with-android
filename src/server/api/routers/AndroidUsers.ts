import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const androidUserRouter = createTRPCRouter({
  getAll: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.androidUser.findMany();
  }),
  getUserById: privateProcedure
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
