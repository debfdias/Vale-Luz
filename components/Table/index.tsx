export default function Table() {
  const points = [
    {
      coord: [-8.0662, -34.88],
      name: "Shopping Recife",
      address: "Rua Padre Carapuceiro, 777 - Boa Viagem, Recife",
      type: "Fixo",
      hours: "8h-16h",
      materials: "Papel, alumínio, plástico, vidro",
    },
    {
      coord: [-8.08, -34.9],
      name: "",
      address: "Praça Souto filho, s/n, Jaqueira - Recife",
      type: "Fixo",
      hours: "7h-19h",
      materials: "Pilhas, eletrônicos, baterias",
    },
    {
      coord: [-8.0577, -34.883],
      name: "",
      address: "Rua Carlos Gomes, 50 - Madalena, Recife",
      type: "Móvel",
      hours: "8h-17h",
      materials: "Papel, alumínio, óleo de cozinha",
    },
    {
      coord: [-8.0852, -34.931],
      name: "",
      address: "Rua do Bom Jesus, 227 – Recife Antigo, Recife",
      type: "Fixo",
      hours: "10h-16h",
      materials: "Papel, alumínio, plástico, vidro",
    },
    {
      coord: [-8.0921, -34.912],
      name: "",
      address: "Rua Cônego Barata, 275 - Tamarineira, Recife",
      type: "Móvel",
      hours: "8h-16h",
      materials: "Pilhas, eletrônicos, baterias",
    },
  ]

  return (
    <div className="px-20 lg:px-40">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-white uppercase bg-green-500 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Endereço
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Horário
              </th>
              <th scope="col" className="px-6 py-3">
                Materiais aceitos
              </th>
            </tr>
          </thead>
          <tbody>
            {points.map((point: any, index: number) => {
              return (
                <tr className="bg-white border-b" key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    {point.address}
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">{point.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{point.hours}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {point.materials}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
