import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"

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

export async function GET(req: Request, res: Response) {
  const session = await getServerSession(authOptions)
  try {
    const contracts = await prisma.contract.findMany({
      where: {
        userId: session?.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(contracts)
  } catch (err) {
    console.log(err)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function DELETE(req: Request, res: Response) {
  const { contractId } = await req.json()
  try {
    await prisma.contract.delete({
      where: {
        id: contractId,
      },
    })

    return new NextResponse("Contract deleted", { status: 200 })
  } catch (err) {
    console.log(`Error: ${err}`)
    return new NextResponse("Algo deu errado", { status: 500 })
  }
}
