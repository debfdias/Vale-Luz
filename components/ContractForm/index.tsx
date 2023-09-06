"use client"
import { contractSchema } from "@/interfaces/contractSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Trash } from "@phosphor-icons/react"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { MoonLoader, PropagateLoader } from "react-spinners"
import { toast } from "react-toastify"
import * as z from "zod"
import InputText from "../Input"
import { Select } from "../Select"

type FormData = z.infer<typeof contractSchema>

export default function ContractForm() {
  const [loading, setLoading] = useState(false)
  const [loadingContracts, setLoadingContracts] = useState(false)
  const [contracts, setContracts] = useState([])
  const { data: session } = useSession()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contractSchema),
  })

  async function getContracts() {
    await axios
      .get("/api/contract")
      .then((response) => {
        setContracts(response.data)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoadingContracts(false)
      })
  }

  useEffect(() => {
    setLoadingContracts(true)
    getContracts()
  }, [])

  register("contractNumber", { required: "Campo obrigatório" })
  register("address", { required: "Campo obrigatório" })
  register("type", { required: "Campo obrigatório" })

  async function handleAddContract(data: any) {
    setLoading(true)
    data.userId = session?.user?.id!

    axios
      .post("/api/contract", data)
      .then(async (res) => {
        if (res.status === 201) {
          toast.success("Contrato cadastrado com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          reset()
          getContracts()
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data || "Algo deu errado.")
      })
      .finally(() => {
        reset()
        setLoading(false)
      })

    //router.push("/")
  }

  async function handleDelete(contractId: string) {
    await axios
      .delete("/api/contract", { data: { contractId } })
      .then(async (res) => {
        if (res.status === 200) {
          toast.success("Contrato deletado com sucesso!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          reset()
        }
        getContracts()
      })
      .catch((err) => {
        toast.error(err?.response?.data || "Algo deu errado.")
      })
  }

  const addressTypes = [
    {
      option: "Casa",
      value: "HOUSE",
    },
    {
      option: "Apartamento",
      value: "APARTMENT",
    },
    {
      option: "Outro",
      value: "OTHER",
    },
  ]

  return (
    <div className="">
      <div className="bg-white shadow-md rounded-lg p-8 mb-4 flex flex-col my-2">
        <form
          action=""
          method="POST"
          onSubmit={handleSubmit(handleAddContract)}
        >
          <div className="flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Conta contrato
                </label>
                <InputText
                  label="Número da conta"
                  name="contractNumber"
                  type="text"
                  error={errors?.contractNumber?.message}
                  register={register}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Tipo de imóvel
                </label>
                <Select
                  name="type"
                  options={addressTypes}
                  values={["HOUSE", "APARTMENT", "OTHER"]}
                  register={register}
                />
              </div>{" "}
            </div>

            <div className="flex flex-col">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Endereço completo
              </label>
              <InputText
                label="Endereço"
                name="address"
                type="text"
                error={errors?.address?.message}
                register={register}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-full cursor-pointer px-8 py-3 bg-green-500 text-white hover:bg-green-700 mt-5 disabled:opacity-40"
          >
            {loading ? (
              <div className="">
                <PropagateLoader color="#36d7b7" />
                Aguarde
              </div>
            ) : (
              <>Cadastrar</>
            )}
          </button>
        </form>
      </div>
      {loadingContracts ? (
        <div className="">
          <MoonLoader color="#18A131" size={24} />
          Carregando contratos
        </div>
      ) : (
        <div className="mt-8 text-sm">
          {contracts?.map((contract: any) => {
            return (
              <div key={contract.id} className="w-full">
                <div className="flex pb-5 items-center justify-between">
                  <div className="flex w-full">
                    <div className="w-1/6">{contract.contractNumber}</div>
                    <div className="w-1/2">{contract.address}</div>
                    <div className="w-1/5">{contract.type}</div>
                    <div className="w-1/5">
                      {contract.isValid ? "Válido" : "Inválido"}
                    </div>
                  </div>
                  <button
                    className="pointer"
                    onClick={() => handleDelete(contract.id)}
                  >
                    <Trash size={24} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
