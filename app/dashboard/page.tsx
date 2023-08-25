"use client"

import { signOut } from "next-auth/react"

export default function Dashboard() {
  return (
    <div>
      <div>dashboard</div>
      <button className="bg-red-500 p-4" onClick={() => signOut()}>
        Sign me out!
      </button>
    </div>
  )
}
