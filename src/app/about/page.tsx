import Spline from '@splinetool/react-spline/next'

export default function About() {
  return (
    <main className="relative border-l-2 border-l-[#BBFF00] h-screen w-full flex flex-col gap-44 justify-center px-8">
        <Spline
          className="absolute bottom-0 right-0 left-0 top-0 opacity-45"
          scene="https://prod.spline.design/XAEmDj7XgENc2ZdR/scene.splinecode" 
        />
       <div className='z-50'>
         <h1 className="text-stone-100 text-7xl mb-10">Quick Summary</h1>
         <p className="text-stone-400 text-lg mb-6">Experienced UI/UX & Visual Designer with a BFA in Advertising from Far Eastern University.
         </p>
         <h3 className="text-stone-100 text-4xl mb-10">Key Strengths & Skills</h3>
         <ul className="mb-8 text-stone-100 flex gap-8 text-2xl">
            <li><b className="text-[#BBFF00]">Design & Prototyping:</b> UI/UX, responsive web design, interaction design systems, logos, print, and traditional art (drawing, oil/acrylic painting).</li>
            
            <li><b className="text-[#BBFF00]">Frontend Development:</b> Converts designs into clean code using HTML, CSS, Bootstrap, Tailwind, React, and Next.js (with experience in Ruby on Rails projects).</li>
            
            <li><b className="text-[#BBFF00]">Video Editing and Directing:</b> Converts stories into a visual motion and story-telling using DaVinci Resolve, Photoshop and ProCreate.</li>
            
            <li><b className="text-[#BBFF00]">Current Design Tools and Workflow:</b> Figma, Photoshop, DaVinci Resolve, GitHub and Pivotal Tracker.</li>
            
          </ul>
          <p className="text-stone-400 text-lg mb-6">In short: A versatile designer who bridges the gap between traditional fine art, modern digital design, and frontend code.
          </p>
          <p className="text-stone-400 text-lg mb-6">Special thanks to <b className='text-stone-100'>Cris Mallajos</b> for fixing backend related errors. Check out his <a className="text-[#BBFF00]" href="https://github.com/sibicb">GIthub Account</a>. Feel free to message him if need his skills.
          </p>
       </div>
        
              
    </main>
  )
}