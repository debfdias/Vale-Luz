"use client"
import { contractSchema } from "@/interfaces/contractSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { PropagateLoader } from "react-spinners"
import { toast } from "react-toastify"
import * as z from "zod"
import InputText from "../Input"

type FormData = z.infer<typeof contractSchema>

export default function ContractForm() {
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  const router = useRouter()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contractSchema),
  })

  register("contractNumber", { required: "Campo obrigatório" })
  register("address", { required: "Campo obrigatório" })
  register("type", { required: "Campo obrigatório" })

  async function handleAddContract(data: any) {
    setLoading(true)
    data.userId = session?.user?.id!
    console.log(data)

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
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data || "Algo deu errado.")
      })
      .finally(() => {
        reset()
        setLoading(false)
      })

    router.push("/")
  }

  return (
    <>
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
                  label="Conta contrato"
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
                <InputText
                  label="Apartamento/Casa/Etc"
                  name="type"
                  type="text"
                  error={errors?.type?.message}
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
    </>
  )
}
