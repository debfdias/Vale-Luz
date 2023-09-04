import { ToastContainer } from "react-toastify"

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-8 sm:ml-64 bg-pink-200">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {children}
    </div>
  )
}
