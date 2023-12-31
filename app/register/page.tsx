"use client"

import CommonHeader from "@/components/CommonHeader"
import InputText from "@/components/Input"
import FormValues from "@/interfaces/FormValues"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { PropagateLoader } from "react-spinners"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import image from "../../assets/image7.jpeg"

export default function Register() {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  })

  register("firstName", { required: "Campo obrigatório" })

  register("lastName", { required: "Campo obrigatório" })

  register("email", {
    required: "Insira seu e-mail",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "E-mail inválido",
    },
  })

  register("password", {
    required: "Insira sua senha",
    minLength: {
      value: 5,
      message: "Mínimo de 5 caracteres",
    },
  })

  async function handleRegister(data: any) {
    setLoading(true)

    const userData = JSON.stringify({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    })

    axios
      .post("/api/auth/register", userData)
      .then(async (res) => {
        if (res.status === 200) {
          toast.success("Usuário cadastrado com sucesso!", {
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
        setLoading(false)
      })
  }

  return (
    <>
      <CommonHeader />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <main className="pt-[70px] flex justify-center items-center ">
        <section className="bg-white flex rounded-[10px] shadow-lg px-20 py-14 lg:p-0 overflow-hidden">
          <div className="flex items-center mx-auto lg:px-20 lg:py-14">
            <form
              className="flex flex-col"
              onSubmit={handleSubmit((data: FormValues) => {
                handleRegister(data)
              })}
            >
              <h1 className="text-4xl font-bold text-gray-500 ">
                Criar uma conta
              </h1>
              <p className="text-gray-500 my-2 mb-6">
                Quase lá! Preencha o formulário abaixo com seus dados.
              </p>
              <div className="flex gap-4">
                <div>
                  <InputText
                    label="Nome"
                    name="firstName"
                    type="text"
                    error={errors.firstName?.message}
                    register={register}
                  />
                </div>
                <div>
                  <InputText
                    label="Sobrenome"
                    name="lastName"
                    type="text"
                    error={errors.lastName?.message}
                    register={register}
                  />
                </div>
              </div>
              <InputText
                label="E-mail"
                name="email"
                type="email"
                error={errors.email?.message}
                register={register}
              />
              <InputText
                label="Senha"
                name="password"
                type="password"
                error={errors.password?.message}
                register={register}
              />
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
              <div className="flex flex-col text-sm text-green-700 pt-4 items-center">
                <div>
                  Já tem uma conta?
                  <Link href="/login" className="font-bold hover:underline">
                    {" "}
                    Faça o login.
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="max-w-[450px] xl:flex mx-auto hidden">
            <Image src={image} alt="img" width={600} height={20} />
          </div>
        </section>
      </main>
    </>
  )
}
