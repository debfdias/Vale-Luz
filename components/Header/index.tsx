"use client"

import { SignIn } from "@phosphor-icons/react"
import Image from "next/image"
import logo from "../../assets/download.png"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Link as LinkScroll } from "react-scroll"

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState<string>("")
  const [scrollActive, setScrollActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <header
        className={`fixed top-0 w-full bg-white px-20 py-1 border-b-2 border-[#d9d9d9] z-30 transition-all ${
          scrollActive ? " shadow-md pt-0" : " pt-3"
        }`}
      >
        <nav className="flex justify-between">
          <div className="flex items-center pr-20">
            <Image
              onClick={() => router.push("/")}
              src={logo}
              alt=""
              className="h-12 w-auto"
            />
            <div className="hidden lg:flex text-gray-400 items-center justify-start px-12 font-semibold text-base gap-12 mt-1">
              {pathname === "/" ? (
                <>
                  <LinkScroll
                    activeClass="active"
                    to="about"
                    spy
                    smooth
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("about")
                    }}
                  >
                    <div
                      className={`items-center cursor-pointer relative ${
                        activeLink === "about"
                          ? " text-green-500 mt-1"
                          : " text-gray-400 hover:text-green-500"
                      }`}
                    >
                      Sobre
                      <div
                        className={`relative ${
                          activeLink === "about"
                            ? " -mx-3 h-[3px] top-3 bg-green-500 rounded-t-lg"
                            : ""
                        }`}
                      >
                        {""}
                      </div>
                    </div>
                  </LinkScroll>

                  <LinkScroll
                    activeClass="active"
                    to="recycles"
                    spy
                    smooth
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("recycles")
                    }}
                  >
                    <div
                      className={`items-center cursor-pointer relative ${
                        activeLink === "recycles"
                          ? " text-green-500 mt-1"
                          : " text-gray-400 hover:text-green-500"
                      }`}
                    >
                      Recicláveis
                      <div
                        className={`relative ${
                          activeLink === "recycles"
                            ? " -mx-3 h-[3px] top-3 bg-green-500 rounded-t-lg"
                            : ""
                        }`}
                      >
                        {""}
                      </div>
                    </div>
                  </LinkScroll>
                  <LinkScroll
                    activeClass="active"
                    to="cronogram"
                    spy
                    smooth
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("cronogram")
                    }}
                  >
                    <div
                      className={`items-center cursor-pointer relative ${
                        activeLink === "cronogram"
                          ? " text-green-500 mt-1"
                          : " text-gray-400 hover:text-green-500"
                      }`}
                    >
                      Pontos
                      <div
                        className={`relative ${
                          activeLink === "cronogram"
                            ? " -mx-3 h-[3px] top-3 bg-green-500 rounded-t-lg"
                            : ""
                        }`}
                      >
                        {""}
                      </div>
                    </div>
                  </LinkScroll>
                  <LinkScroll
                    activeClass="active"
                    to="download"
                    spy
                    smooth
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink("download")
                    }}
                  >
                    <div
                      className={`items-center cursor-pointer relative ${
                        activeLink === "download"
                          ? " text-green-500 mt-1"
                          : " text-gray-400 hover:text-green-500"
                      }`}
                    >
                      Aplicativo
                      <div
                        className={`relative ${
                          activeLink === "download"
                            ? " -mx-3 h-[3px] top-3 bg-green-500 rounded-t-lg"
                            : ""
                        }`}
                      >
                        {""}
                      </div>
                    </div>
                  </LinkScroll>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="hidden sm:flex justify-end items-center ml-8 gap-6 text-md mb-2">
            <button
              onClick={() => router.push("/login")}
              className="bg-green-500 border-0 hover:bg-green-700 rounded-[20px] py-2 px-6 text-white font-medium flex items-center gap-2"
            >
              <SignIn size={20} />
              <span>Entrar</span>
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}
