import prisma from "@/lib/prisma"
import { hash } from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, password, firstName, lastName } = await req.json()
  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (exists) {
    return NextResponse.json(
      { error: "Usuário já cadastrado." },
      { status: 400 }
    )
  } else {
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword: await hash(password, 10),
        firstName,
        lastName,
        name: firstName + " " + lastName,
      },
    })
    return NextResponse.json(user)
  }
}
