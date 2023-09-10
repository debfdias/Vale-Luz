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
    onDelete(currentId)
  }

  function handleCancel() {
    onCancel(!showDialog)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 p-4 md:inset-0 overflow-y-auto h-full w-full bg-black/70">
        <div className="relative max-h-full h-screen flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 w-[500px] shadow-lg">
            <div className="text-lg font-bold pb-4">{title}</div>
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
        </div>
      </div>
    </>
  )
}
