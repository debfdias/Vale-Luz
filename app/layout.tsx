import Provider from "@/contexts/AuthProvider"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"

const font = Raleway({ weight: ["200", "400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neonergia - Vale Luz",
  description: "Projeto Vale Luz",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
