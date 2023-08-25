"use client"

import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import MarkerIcon from "../../assets/marker.png"

export default function Map() {
  const points = [
    { coord: [-8.0662, -34.88], address: "Rua das Pombas, 88", type: "Fixo" },
    { coord: [-8.08, -34.9], address: "Rua dos Alfeneiros, 100", type: "Fixo" },
    {
      coord: [-8.0577, -34.883],
      address: "Rua Cabral Neto, 23",
      type: "Móvel",
    },
    { coord: [-8.0852, -34.931], address: "Avenida Orleans, sn", type: "Fixo" },
    {
      coord: [-8.0921, -34.912],
      address: "Rua Tampico Tuna, 3490",
      type: "Móvel",
    },
  ]

  return (
    <div>
      <MapContainer
        style={{
          height: "60vh",
          width: "900px",
          zIndex: 1,
        }}
        center={[-8.08, -34.9]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {points.map((point: any, index) => {
          return (
            <div key={index}>
              <Marker
                icon={
                  new L.Icon({
                    iconUrl: MarkerIcon.src,
                    iconRetinaUrl: MarkerIcon.src,
                    iconSize: [25, 41],
                    iconAnchor: [12.5, 41],
                    popupAnchor: [0, -41],
                    shadowSize: [41, 41],
                  })
                }
                position={point.coord}
              >
                <Popup>
                  {point.address} <br /> Easily customizable.
                </Popup>
              </Marker>
            </div>
          )
        })}
      </MapContainer>
    </div>
  )
}
