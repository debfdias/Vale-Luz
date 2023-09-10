import z from "zod"

export const contractSchema = z.object({
  contractNumber: z
    .string({
      required_error: "Número de contrato é obrigatório.",
      invalid_type_error: "Número de contrato precisa ser numérico.",
    })
    .min(6, { message: "Conta contrato possui 6 dígitos." })
    .max(6, { message: "Conta contrato possui 6 dígitos." }),
  address: z.string().min(5, { message: "Campo endereço é obrigatório." }),
  type: z.string(),
  userId: z.string().optional(),
})

export type User = z.infer<typeof contractSchema>
