interface DialogProps {
  title: string
  description: string
  onCancel: (isModalOpen: boolean) => void
  showDialog: boolean
  onDelete: (id: string) => Promise<void>
  currentId: string
}

export default function Dialog({
  title,
  description,
  onCancel,
  showDialog,
  onDelete,
  currentId,
}: DialogProps) {
  function handleConfirm() {
    onCancel(!showDialog)
    onDelete(currentId)
  }

  function handleCancel() {
    onCancel(!showDialog)
  }

  return (
    <div className="bg-white relative rounded-lg p-8 w-[500px] shadow-lg">
      <div className="text-lg font-bold py-2">{title}</div>
      <div>{description}</div>
      <div className="gap-4 flex text-sm mt-8 font-semibold">
        <button
          onClick={handleConfirm}
          className="px-4 py-3 bg-red-500 rounded-lg text-white hover:bg-red-600"
        >
          Confirmar
        </button>
        <button
          onClick={handleCancel}
          className="px-4 py-3 bg-gray-200 rounded-lg hover:bg-slate-300"
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}
