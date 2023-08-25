"use client"

import { Money, Recycle, UsersThree } from "@phosphor-icons/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import hero from "../../assets/image2.png"

export default function About() {
  const router = useRouter()
  const data = [
    {
      name: "Clientes",
      value: "390",
      icon: <UsersThree size={32} weight="fill" color="#18A131" />,
    },
    {
      name: "Recicláveis",
      value: "4.5 t",
      icon: <Recycle size={32} weight="fill" color="#18A131" />,
    },
    {
      name: "Descontos",
      value: "R$ 50 mil",
      icon: <Money size={32} weight="fill" color="#18A131" />,
    },
  ]
  return (
    <div className="mt-24 px-20 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
        <div className=" flex flex-col gap-8 justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="lg:text-3xl md:text-xl font-medium text-black-600 leading-normal">
            Que tal ganhar desconto na sua conta de luz todo mês
            <span className="font-bold"> reciclando?</span>
          </h1>
          <p className="text-gray-300 mt-4 mb-6">
            O Vale Luz é um projeto da Neoenergia que prevê diversos benefícios,
            como a troca de resíduos sólidos por descontos na conta de energia.
            O projeto além de reduzir o valor da conta de energia dos moradores,
            ainda tem o objetivo de estimular o uso racional dos recursos
            naturais e minimizar os impactos negativos causados pelos resíduos
            no meio ambiente, estimulando a reciclagem.
          </p>
          <button
            onClick={() => router.push("/register")}
            className="bg-green-500 border-0 hover:bg-green-700 rounded-[20px] py-2 px-6 text-white font-medium flex items-center gap-2 hover:scale-[1.1] hover:-translate-y-1 transition ease-in-out delay-150"
          >
            <span className="font-bold">Comece a economizar!</span>
          </button>
        </div>
        <div className="flex w-full">
          <Image
            src={hero}
            alt=""
            quality={100}
            width={612}
            height={383}
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative w-full flex">
        <div className="bg-white rounded-xl w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-4 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 z-10 hover:shadow-sm">
          {data.map((item, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-primary-200 w-12 h-12 mr-6 rounded-full hover:shadow-sm bg-green-100">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-gray-500 font-bold">
                    {item.value}
                  </p>
                  <p className="text-lg text-gray-400">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
