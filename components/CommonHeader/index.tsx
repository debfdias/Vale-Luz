import Image from "next/image"
import logo from "../../assets/download.png"

import Link from "next/link"

export default function CommonHeader() {
  return (
    <div>
      <header
        className={
          " top-0 w-full bg-white px-20 py-1 border-b-2 border-[#d9d9d9] z-30 transition-all pt-3"
        }
      >
        <nav className="flex justify-between">
          <div className="flex items-center pr-20">
            <Link href="/">
              {" "}
              <Image src={logo} alt="" className="h-12 w-auto" />
            </Link>

            <div className="hidden lg:flex text-gray-400 items-center justify-start px-12 font-semibold text-base gap-12 mt-1">
              <Link
                href="/#about"
                className="hover:text-green-500"
                scroll={false}
              >
                Sobre
              </Link>
              <Link
                href="/#recycles"
                className="hover:text-green-500"
                scroll={false}
              >
                Recicláveis
              </Link>
              <Link
                href="/#cronogram"
                className="hover:text-green-500"
                scroll={false}
              >
                Pontos
              </Link>
              <Link
                href="/#download"
                className="hover:text-green-500"
                scroll={false}
              >
                Applicativo
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
