// interface InputProps {
//   label: string
//   name: keyof FormValues | keyof ContractValues
//   type: string
//   register: UseFormRegister<FormValues>
//   error: string | undefined
// }

const InputText = ({ label, name, type, register, error }: any) => {
  return (
    <>
      <input
        id={name}
        name={name}
        type={type}
        {...register(name)}
        placeholder={label}
        className="rounded-[4px] bg-gray-100 py-2 px-4 mt-2 mb-1 focus:outline-none focus:ring-1 focus:ring-green-500 border border-gray-200 w-full"
      />
      <p className="mb-2 text-xs text-red-500 font-medium">{error}</p>
    </>
  )
}

export default InputText
