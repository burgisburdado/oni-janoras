import { Button } from "@/components/ui/button";
import { Instagram, NotebookPen, PencilRuler, Youtube } from "lucide-react"
import Link from 'next/link'
import Spline from '@splinetool/react-spline/next'


export default function Home() {
  return (
    <main className="relative border-l-2 border-l-[#BBFF00] h-screen w-full flex flex-col gap-44 justify-center pr-8">
      <Spline
        className="absolute bottom-0 right-0 left-0 top-0 opacity-25"
        scene="https://prod.spline.design/FmAlJhty8kPCKNmb/scene.splinecode"
        
      />
      <div className="absolute top-50 left-50 w-3/6 h-min self-center">
        <div className="text-stone-100 text-7xl">Hello!</div>
        <div className="text-stone-200 font-light">Im a freelance Front-end Designer creating cutting edge digital experiences with the fantastic team at Proudcloud.</div>
        <Button
        className="text-lime-600 hover:text-[#BBFF00] -ml-2 float-right"
        variant="link"
        size="sm">View work</Button>
      </div>
      <div className="absolute right-4 top-64 flex flex-col gap-8 text-stone-500">
        <Link className="hover:text-[#BBFF00]" href="https://www.behance.net/seen_evrthng" target="_blank"><PencilRuler/></Link>
        <Link className="hover:text-[#BBFF00]" href="https://www.notion.so/Designer-Workflow-762d2eaf89ad42479977900fa97385c9" target="_blank"><NotebookPen/></Link>
        <Link className="hover:text-[#BBFF00]" href="https://www.instagram.com/seen_evrthng/" target="_blank"><Instagram/></Link>
        <Link className="hover:text-[#BBFF00]" href="https://www.youtube.com/@seen_evrthng" target="_blank"><Youtube/></Link>
      </div>
      
    </main>
  );
}
