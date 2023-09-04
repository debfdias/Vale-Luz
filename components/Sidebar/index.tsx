import {
  ChalkboardTeacher,
  ClockCounterClockwise,
  Files,
  Gear,
  Recycle,
  SignOut,
} from "@phosphor-icons/react"
import { signOut } from "next-auth/react"
import Link from "next/link"

interface ISidebarProps {
  isNavOpen: boolean
  setNavOption: (option: string) => void
  currentOption: string
}

const navOptions = [
  {
    name: "Painel de controle",
    icon: <ChalkboardTeacher size={32} />,
    option: "dashboard",
  },
  {
    name: "Recicláveis",
    icon: <Recycle size={32} />,
    option: "recycles",
  },
  {
    name: "Contas contrato",
    icon: <Files size={32} />,
    option: "contracts",
  },
  {
    name: "Histórico",
    icon: <ClockCounterClockwise size={32} />,
    option: "history",
  },
  {
    name: "Configurações",
    icon: <Gear size={32} />,
    option: "settings",
  },
]

export default function Sidebar({
  isNavOpen,
  setNavOption,
  currentOption,
}: ISidebarProps) {
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-[90px] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 ${
        isNavOpen ? "-translate-x-full" : "translate-x-0"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <div>
          {navOptions.map((item: any) => {
            return (
              <Link
                className={`flex items-center p-2 text-gray-500 rounded-lg hover:bg-green-100 group hover:text-green-700 mb-3 transition ease-in-out delay-75 ${
                  currentOption === item.option
                    ? "bg-green-100 text-green-700 font-semibold"
                    : ""
                }`}
                onClick={() => setNavOption(item.option)}
                key={item.option}
                href={""}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            )
          })}

          <button
            className="flex items-center text-gray-500 hover:text-red-500 px-3 gap-2 transition ease-in-out delay-150 hover:bg-gray-100 p-2 rounded-lg w-full"
            onClick={() => signOut()}
          >
            <SignOut size={32} />
            <p className="">Sair</p>
          </button>
        </div>
      </div>
    </aside>
  )
}
