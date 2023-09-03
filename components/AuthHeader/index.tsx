import { List } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/download.png"

interface IAuthHeaderProps {
  setIsNavMobile: (isNavOpen: boolean) => void
  showNav: boolean
}

export default function AuthHeader({
  setIsNavMobile,
  showNav,
}: IAuthHeaderProps) {
  function handleNavMobile() {
    setIsNavMobile(!showNav)
  }
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-green-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={handleNavMobile}
            >
              <List size={32} />
            </button>
            <Link href="/">
              {" "}
              <Image src={logo} alt="" className="h-10 ml-4 w-auto" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
