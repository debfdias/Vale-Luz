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

  async function handleAddContract(data: FormData) {
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

    //router.push("/")
  }

  return (
    <>
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">
              Send us a <br /> message
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message*"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="w-[450px] bg-pink-400">
        <form
          className="mt-12"
          action=""
          method="POST"
          onSubmit={handleSubmit(handleAddContract)}
        >
          <div className="flex flex-col">
            <div className="flex gap-4">
              <InputText
                label="Conta contrato"
                name="contractNumber"
                type="text"
                error={errors?.contractNumber?.message}
                register={register}
              />

              {/* <select
              id="type"
              name="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>HOUSE</option>
              <option>APARTMENT</option>
              <option>OTHER</option>
            </select> */}

              <InputText
                label="Type"
                name="type"
                type="text"
                error={errors?.type?.message}
                register={register}
              />
            </div>
            <div className="flex flex-col">
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
            className="rounded-full cursor-pointer px-4 py-3 bg-green-500 text-white hover:bg-green-700 mt-5 disabled:opacity-40"
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
