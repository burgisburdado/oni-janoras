import { Instagram, NotebookPen, PencilRuler, Youtube} from "lucide-react"
import Link from 'next/link'
import Spline from '@splinetool/react-spline/next'
import Tools from "@/components/tools"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function Home() {
  return (
    <main className="relative border-l-2 border-l-[#BBFF00] h-screen w-full flex flex-col gap-44 justify-center pr-8">
      <Spline
        className="absolute bottom-0 right-0 left-0 top-0 opacity-75"
        scene="https://prod.spline.design/2CMstdWvrSsixKKM/scene.splinecode"
        
      />
      <div className="absolute flex flex-col gap-10 left-20 bottom-60">
        <h5 className="text-stone-50 text-1xl font-bold z-50">TOOLS OF TRADE
        </h5>
        <Tools />
      </div>
      
      <div className="absolute right-12 top-64 flex flex-col gap-12 text-stone-500">

        <Tooltip>
          <TooltipTrigger asChild>
            <Link className="hover:text-[#BBFF00]" href="https://www.behance.net/seen_evrthng" target="_blank"><PencilRuler size={48}/></Link>

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">Behance</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link className="hover:text-[#BBFF00]" href="https://www.notion.so/Designer-Workflow-762d2eaf89ad42479977900fa97385c9" target="_blank"><NotebookPen size={48}/></Link>

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">Notion</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link className="hover:text-[#BBFF00]" href="https://www.instagram.com/seen_evrthng/" target="_blank"><Instagram size={48}/></Link>

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">Instagram</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link className="hover:text-[#BBFF00]" href="https://www.youtube.com/@seen_evrthng" target="_blank"><Youtube size={48}/></Link>

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">YouTube</p>
          </TooltipContent>
        </Tooltip>

        
        
        
        
      </div>
      
    </main>
  );
}
