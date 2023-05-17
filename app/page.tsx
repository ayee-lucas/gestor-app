import React from "react"
import Hero from "./components/Presentation/Hero"
import Start from "./components/Presentation/Start"
import Information from "./components/Presentation/Information"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import Benefits from "./components/Presentation/Benefits"
import Footer from "./components/Presentation/Footer"


export default async function Presentation() {
  const session = await getServerSession(authOptions)

  if (session?.user.name) {
    redirect("/Home")
  } 

  return (
    <main className=" dark:bg-[#100724] ">
      <Start/>
      <Information/>
      <div className="border-t-[2px] border-separate border-[#55149e] mx-12" />
      <Benefits/>
      <div className="border-t-[2px] border-separate border-[#55149e] mx-16 mt-10" />
      <Hero/>
      <div className="border-t-[2px] border-separate border-gray-400 dark:border-gray-700 mx-20 mt-5 mb-8" />
      <Footer/>
    </main> 
  )
}
