"use client"

import AuthHeader from "@/components/AuthHeader"
import Sidebar from "@/components/Sidebar"
import Wrapper from "@/components/Wrapper"
import { useSession } from "next-auth/react"
import dynamic from "next/dynamic"

import { useEffect, useState } from "react"
import "react-toastify/dist/ReactToastify.css"

const ContractForm = dynamic(() => import("@/components/ContractForm"))

export default function Dashboard() {
  const [navOption, setNavOption] = useState<string>("dashboard")
  const [isNavMobile, setIsNavMobile] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {}, [isNavMobile, navOption])

  return (
    <div>
      <AuthHeader setIsNavMobile={setIsNavMobile} showNav={isNavMobile} />
      <Sidebar
        isNavOpen={isNavMobile}
        setNavOption={setNavOption}
        currentOption={navOption}
      />

      <Wrapper>
        <div>Ola, {session?.user.name}</div>
        {navOption === "contracts" && <ContractForm />}
      </Wrapper>
    </div>
  )
}
