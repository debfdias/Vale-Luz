import z from "zod"

export const contractSchema = z.object({
  contractNumber: z.string(),
  address: z.string(),
  type: z.string(),
  userId: z.string().optional(),
})

export type User = z.infer<typeof contractSchema>
