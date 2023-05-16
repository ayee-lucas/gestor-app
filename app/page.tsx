import React from "react"
import Hero from "./components/Presentation/Hero"
import Start from "./components/Presentation/Start"
import Information from "./components/Presentation/Information"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"


export default async function Presentation() {
  const session = await getServerSession(authOptions)

  if (session?.user.name) {
    redirect("/Home")
  } 

  return (
    <main className="">
      <Start/>
      <Information/>
      <Hero/>
    </main>
  )
}
