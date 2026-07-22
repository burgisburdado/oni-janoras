
import Clients from "@/components/clients"
import Featured from "@/components/featured"
import Spline from '@splinetool/react-spline/next'

export default function Works() {

  return (
    <main className="relative border-l-2 border-l-[#BBFF00] flex flex-col overflow-hidden">
      <div className="relative h-screen bg-stone-950 flex items-start justify-center flex-col pl-10 gap-10">
        <Spline
          className="absolute bottom-0 right-0 left-0 top-0 opacity-85"
          scene="https://prod.spline.design/yQNZ6ySx3BbqP0Oo/scene.splinecode" 
        />
        <h1 data-aos="fade-right" className="text-stone-100 text-8xl">PROJECTS</h1>
        <p  data-aos="fade-left" className="text-stone-50 text-4xl w-2/4">Dynamic shifts in tone and texture guide the viewer's eye or reader's focus seamlessly through the work, ensuring that no single component feels accidental or redundant. This foundational layout provides the necessary stability, allowing the work to support complex thematic ideas without losing its structural integrity or visual logic.</p>
      </div>
      <div className="pb-14 pt-12 bg-gradient-to-r from-neutral-100 to-stone-200  h-fit w-full gap-10 flex flex-col">
        <h5 className="text-stone-900 text-1xl font-bold mx-7 mb-8">
          <b className="text-[#45EAD9] text-5xl">*</b> PREVIOUS CLIENTS
        </h5>

        <div className="relative my-14 h-60">
          <Clients />
        </div>

        <div className="flex items-center justify-between">
          <h5 className="text-stone-900 text-1xl font-bold mx-7 mb-8">
            <b className="text-[#45EAD9] text-5xl">*</b> FEATURED PROJECTS
          </h5>
          <p className="text-stone-500 w-2/6">Each selected work showcases a unique balance of creative strategy, technical precision, and measurable success across diverse industries.</p>
        </div>

        

        < Featured />


        
    

      </div>

    </main>
  )
}