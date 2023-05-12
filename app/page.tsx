import React from "react"
import Hero from "./components/Presentation/Hero"
import Start from "./components/Presentation/Start"
import Information from "./components/Presentation/Information"


export default function Presentation() {
  return (
    <main className="">
      <Start/>
      <Information/>
      <Hero/>
    </main>
  )
}
