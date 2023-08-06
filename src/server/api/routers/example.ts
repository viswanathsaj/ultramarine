import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input, ctx }) => {
    return {
      greeting: `Hello ${input.text}, ${ctx.user?.firstName}`
    }
  }),
  getMany: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany()
  }),

  getUser: publicProcedure.query(({ ctx }) => {
    return ctx.user
  })
})
