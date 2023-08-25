import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function Layout({ children }: any) {
  return (
    <div>
      <Head>
        <title>Neoenergia - Vale Luz</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
