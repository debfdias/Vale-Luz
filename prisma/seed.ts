import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

interface Bill {
  price: number
  discount: number
  contractNumber: string
  expirationDate: Date
  createdAt: Date
  updatedAt: Date
}

let start = new Date()
let end = new Date(start)
end.setMonth(end.getMonth() + 1)

const bills: Bill[] = [
  {
    price: 145.6,
    discount: 0,
    contractNumber: "34009891",
    expirationDate: end,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    price: 88.45,
    discount: 0,
    contractNumber: "45115803",
    expirationDate: end,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    price: 100.5,
    discount: 0,
    contractNumber: "12345678",
    expirationDate: end,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

async function main() {
  console.log(`Start seeding ... 🌱🌱🌱`)
  for (const u of bills) {
    await prisma.bill.create({
      data: u,
    })
  }
  console.log(`Seeding finished! ✅🌱`)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
