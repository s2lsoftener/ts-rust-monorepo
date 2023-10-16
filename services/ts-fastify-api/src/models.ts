import z from 'zod'

const Pair = z.object({
  a: z.number(),
  b: z.number(),
});

const Number = z.number()

export const models = { Pair, Number }
