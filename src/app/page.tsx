import { Button } from "@/components/ui/button";
import { Instagram, NotebookPen, PencilRuler, Youtube } from "lucide-react"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative border-l-2 border-l-[#BBFF00] h-screen w-full flex flex-col gap-44 justify-center pr-8">
      <div className="w-3/6 h-min self-center">
        <h1 className="text-stone-100 text-7xl">Hello!</h1>
        <p className="text-stone-500 font-light">Im a freelance Front-end Designer creating cutting edge digital experiences with the fantastic team at Proudcloud.</p>
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
