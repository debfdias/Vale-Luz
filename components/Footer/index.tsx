"use client"

import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react"
import Image from "next/image"
import logo from "../../assets/download.png"

export default function Footer() {
  return (
    <div className="bg-white p-10">
      <footer className="w-full px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-1 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start gap-4">
          <Image src={logo} alt="" className="h-10 w-auto" />
          <p className="mb-4">
            <span className="font-medium">O projeto Vale Luz</span> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer hover:bg-green-300">
              <FacebookLogo size={32} />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer hover:bg-green-300">
              <TwitterLogo size={32} />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer hover:bg-green-300">
              <InstagramLogo size={32} />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Projeto Vale Luz
          </p>
        </div>
        <div className="row-span-1 sm:col-span-2 sm:col-start-8 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Projeto Vale Luz
          </p>
          <ul className="text-gray-400">
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Sobre nós
            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Sustentabilidade
            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Política de privacidade
            </li>
          </ul>
        </div>
        <div className="row-span-1 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Contato</p>
          <ul className="text-gray-400">
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Fale conosco
            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Dúvidas frequentes
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
