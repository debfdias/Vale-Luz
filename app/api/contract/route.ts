import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { contractNumber, address, type, userId } = await req.json()
  const exists = await prisma.contract.findUnique({
    where: {
      contractNumber,
    },
  })
  if (exists) {
    return NextResponse.json(
      { error: "Contrato já cadastrado." },
      { status: 400 }
    )
  } else {
    const contract = await prisma.contract.create({
      data: {
        contractNumber,
        address,
        type,
        userId,
      },
    })
    return NextResponse.json(contract, { status: 201 })
  }
}
