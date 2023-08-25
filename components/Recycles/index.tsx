import { CheckCircle } from "@phosphor-icons/react"
import Image from "next/image"
import recycle from "../../assets/image5.png"

export default function Recycles() {
  const materials = [
    {
      key: "Papel",
      samples:
        "papelão, embalagem Tetra Pak, caixas em geral, papel de escritório, cadernos.",
    },
    {
      key: "Plástico",
      samples: "sacos plásticos, embalagens de produtos, garrafas PET.",
    },
    {
      key: "Metal",
      samples: "latas de alumínio.",
    },
    {
      key: "Vidro",
      samples: "garrafas, potes.",
    },
    {
      key: "Eletrônico",
      samples: "CPU, notebook, celular, rádio, baterias.",
    },
  ]

  return (
    <div
      className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 px-20 pt-[80px]"
      id="recycles"
    >
      <div className="flex">
        <div className="w-full px-4 -mt-[50px]">
          <Image src={recycle} alt="" quality={100} />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5 items-start justify-center w-full lg:w-9/12">
          <h3 className="text-2xl font-bold text-gray-500">
            Materiais aceitos pelo projeto
          </h3>
          <p className="my-2 text-gray-400">
            Para participar veja abaixo os materiais aceitos pelo projeto e os
            locais de troca dos resíduos.
          </p>
          <div className="text-gray-400 self-start ml-8 flex flex-col">
            {materials.map((item, index) => (
              <div key={index}>
                <div className="flex items-center">
                  <CheckCircle size={18} weight="fill" color="#18A131" />
                  <span className="ml-3 font-semibold">{item.key}</span>
                </div>
                <div className="ml-8 mb-4">{item.samples}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
