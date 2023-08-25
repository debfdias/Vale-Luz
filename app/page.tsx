import About from "@/components/About"
import Cronogram from "@/components/Cronogram"
import DownloadApp from "@/components/Download"
import Recycles from "@/components/Recycles"
import Layout from "@/layout"

export default function Home() {
  return (
    <main>
      <Layout>
        <About />
        <Recycles />
        <Cronogram />
        <DownloadApp />
      </Layout>
    </main>
  )
}
