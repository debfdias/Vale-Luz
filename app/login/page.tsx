"use client"

import CommonHeader from "@/components/CommonHeader"
import InputText from "@/components/Input"
import FormValues from "@/interfaces/FormValues"
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { PropagateLoader } from "react-spinners"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import googleLogo from "../../assets/google..png"
import image from "../../assets/image7.jpeg"

export default function Login() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  register("email", {
    required: "Campo obrigatório",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "E-mail inválido",
    },
  })

  register("password", {
    required: "Campo obrigatório",
    minLength: {
      value: 5,
      message: "Mínimo de 5 caracteres",
    },
  })

  function handleLogin(data: any) {
    setLoading(true)
    signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      // @ts-ignore
    }).then(({ error }) => {
      if (error) {
        setLoading(false)
        toast.error(error)
      } else {
        router.refresh()
        router.push("/dashboard")
      }
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
      <main className="pt-[80px] flex justify-center items-center">
        <section className="bg-white flex flex-wrap shadow-lg px-16 py-14 lg:p-0 overflow-hidden rounded-[10px]">
          <div className="flex items-center mx-auto  mb-4 lg:px-16 lg:py-14">
            <form
              onSubmit={handleSubmit((data) => {
                handleLogin(data)
                reset()
              })}
              className="flex flex-col"
            >
              <h1 className="text-4xl font-bold text-slate-700 ">
                Bem-vindo(a) de volta!
              </h1>
              <div className="py-6">
                <Link
                  href=""
                  className="px-6 py-2 rounded-[4px] shadow-sm flex gap-4 border border-gray-200 text-sm items-center hover:shadow-lg justify-center"
                >
                  <Image
                    src={googleLogo}
                    alt="img"
                    width={20}
                    height={20}
                  ></Image>
                  <p>Continue com Google</p>
                </Link>
              </div>
              <div className="flex items-center gap-4 pb-4">
                <div className="border-t border-slate-300 grow"></div>
                <p className="text-base text-slate-400 self-start">ou</p>
                <div className="border-t border-slate-300 grow"></div>
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
                  <>Entrar</>
                )}
              </button>
              <div className="flex flex-col text-sm text-green-700 pt-4 items-center">
                <div>
                  Não tem uma conta?
                  <Link href="/register" className="font-bold hover:underline">
                    {" "}
                    Cadastre-se.
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="max-w-[345px] lg:max-w-[430px] xl:flex mx-auto hidden">
            <Image
              src={image}
              alt="img"
              width={600}
              height={20}
              className=" "
            />
          </div>
        </section>
      </main>
    </>
  )
}
