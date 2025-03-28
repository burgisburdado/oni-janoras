import Spline from '@splinetool/react-spline/next'

export default function About() {
  return (
    <main className="relative border-l-2 border-l-[#BBFF00] h-screen w-full flex flex-col gap-44 justify-center px-8">
        <h1 className="text-stone-100 text-7xl">About Page</h1>
        <Spline
          className="absolute bottom-0 right-0 left-0 top-0 opacity-85"
          scene="https://prod.spline.design/XAEmDj7XgENc2ZdR/scene.splinecode" 
        />
              
    </main>
  )
}