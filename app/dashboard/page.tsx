"use client"

import { signOut, useSession } from "next-auth/react"

export default function Dashboard() {
  const { data: session } = useSession()

  return (
    <div>
      <div>dashboard</div>
      <div>Signed in as {session?.user?.email}</div>
      <button className="bg-red-500 p-4" onClick={() => signOut()}>
        Sign me out!
      </button>
    </div>
  )
}
