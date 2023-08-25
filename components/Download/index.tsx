import Image from "next/image"
import Link from "next/link"
import badgeApple from "../../assets/badge_apple.png"
import badgeGoogle from "../../assets/badge_google.png"
import phone from "../../assets/phone2.png"

export default function DownloadApp() {
  return (
    <div className="px-20 lg:px-60 pt-[150px] pb-[50px] " id="download">
      <div className="lg:flex md:grid pb-20 lg:px-10 gap-10">
        <div className="grid lg:flex lg:flex-col gap-5 items-start lg:w-4/5 w-full">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-500">
            Baixe nosso aplicativo e tenha praticidade!
          </h3>
          <p className="my-2">
            Com o nosso aplicativo você poderá cadastrar novas contas,
            acompanhar suas merrecas coletadas, pontos de coleta dos recicláveis
            e conferir os descontos que conseguiu.
          </p>
          <span className="font-semibold">
            Baixe agora para Android ou iOS totalmente gratuito!
          </span>
          <div className="flex items-center gap-6 pt-10">
            <Link target="_blank" href="https://play.google.com/store">
              <div className="w-[110px] ">
                <Image
                  alt="Disponível no Google Play"
                  src={badgeGoogle}
                  className="w-full"
                />
              </div>
            </Link>
            <Link target="_blank" href="https://www.apple.com/app-store/">
              <div className="w-[130px]">
                <Image
                  alt="Disponível na App Store"
                  src={badgeApple}
                  className="w-full"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full flex">
          <Image
            src={phone}
            alt=""
            quality={60}
            className="object-contain w-1/3 min-w-[300px] sm:ml-[50px] lg:-mt-[20px] mt-[20px]"
          />
        </div>
      </div>
    </div>
  )
}
