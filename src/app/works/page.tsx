'use client'
import Clients from "@/components/clients"

export default function Works() {

  return (
    <main className="relative border-l-2 border-l-[#BBFF00] h-full flex flex-col justify-center overflow-hidden">
      <div className="h-3/4 bg-stone-950">
        <h1 className="text-stone-100 text-7xl">WORKS PAGE</h1>
      </div>
      <div className="pb-14 pt-12 bg-gradient-to-r from-neutral-100 to-stone-200  h-fit w-full">
        <h5 className="text-stone-700 text-2xl font-bold mx-7 mb-8">
           <b className="text-[#45EAD9] text-5xl">*</b> PREVIOUS CLIENTS</h5>

        <div className="overflow-hidden">
          <Clients />
        </div>

        

      </div>

    </main>
  )
}