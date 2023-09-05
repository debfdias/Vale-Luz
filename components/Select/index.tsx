import { CaretDown } from "@phosphor-icons/react"

export function Select({ register, options, name, ...rest }: any) {
  return (
    <div className="flex items-center">
      <select
        {...register(name)}
        {...rest}
        className="block appearance-none rounded-[4px] bg-gray-100 py-2 px-4 mt-2 mb-1 focus:outline-none focus:ring-1 focus:ring-green-500 border border-gray-200 w-full text-gray-300"
      >
        <option value="none" selected disabled hidden className="bg-pink-500">
          Selecione um tipo
        </option>
        {options.map((item: any) => (
          <option key={item.option} value={item.value}>
            {item.option}
          </option>
        ))}
      </select>
      <div className="-ml-8 pointer-events-none">
        <CaretDown size={22} />
      </div>
    </div>
  )
}
