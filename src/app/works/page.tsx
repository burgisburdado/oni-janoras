'use client'
import CLients from "@/components/clients"


export default function Works() {


  return (
    <main className="relative border-l-2 border-l-[#BBFF00] h-full w-full flex flex-col justify-center">
      <div className="w-full h-3/4 bg-stone-950">
        <h1 className="text-stone-100 text-7xl">WORKS PAGE</h1>
      </div>
      <div className="bg-gradient-to-r from-neutral-100 to-stone-200 w-full h-fit">
        <h5 className="text-stone-700 text-2xl font-bold m-7">
           <b className="text-4xl">*</b> PREVIOUS CLIENTS</h5>
        <CLients />
      </div>
      
      

    </main>
  )
}