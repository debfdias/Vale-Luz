import { Map, Marker, ZoomControl } from "pigeon-maps"

export default function Cronogram() {
  return (
    <div className="flex flex-col pt-20" id="cronogram">
      <div className="px-40 pb-20">
        <div className="text-2xl sm:text-3xl font-bold text-gray-500">
          Pontos de Coleta
        </div>
        <div className="pt-4 text-gray-300">
          O projeto Vale Luz possui vários pontos fixos e móveis espalhados por
          toda cidade.{"\n"}
          Verifique o mais próximo de você e comece a economizar!
        </div>
      </div>
      <div>
        <div className="hidden lg:flex pb-12 px-40 ">
          <Map height={500} defaultCenter={[-8.08, -34.9]} defaultZoom={12}>
            <ZoomControl />
            <Marker width={50} anchor={[-8.0577, -34.883]} />
            <Marker width={50} anchor={[-8.0662, -34.88]} />
            <Marker width={50} anchor={[-8.0852, -34.931]} />
            <Marker width={50} anchor={[-8.0921, -34.912]} />
          </Map>
        </div>
      </div>
    </div>
  )
}
