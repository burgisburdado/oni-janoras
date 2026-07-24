"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"

import HTML from "../app/images/html.png"
import CSS from "../app/images/css.png"
import React from "../app/images/react.png"
import TS from "../app/images/ts.png"
import Tailwind from "../app/images/tailwind.png"
import Shadcn from "../app/images/shadcn.png"
import Github from "../app/images/github.png"
import Davinci from "../app/images/davinci.png"
import Procreate from "../app/images/procreate.png"
import PS from "../app/images/ps.png"
import Reaper from "../app/images/reaper.png"


import "aos/dist/aos.css";

export default function Tools() {

  return (
    <main className="z-50">
      
      <div className="text-stone-50 grid grid-cols-7 grid-rows-2 gap-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20
             w-auto grayscale hover:grayscale-0" src={HTML} alt="HTML" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">HTML</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20 w-auto grayscale hover:grayscale-0" src={CSS} alt="CSS" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">CSS</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20 w-auto grayscale hover:grayscale-0" src={React} alt="React" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">React</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20 w-auto grayscale hover:grayscale-0" src={TS} alt="Typescript" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">Typescript</p>
          </TooltipContent>
        </Tooltip>


        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20 w-auto grayscale hover:grayscale-0" src={Tailwind} alt="Tailwind" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">Tailwind</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20 w-auto grayscale hover:grayscale-0" src={Shadcn} alt="Shadcn" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">Shadcn</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20 w-auto grayscale hover:grayscale-0" src={Github} alt="Github" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">Github</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20 w-auto grayscale hover:grayscale-0" src={Davinci} alt="DaVinci" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">DaVinci Resolve</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20 w-auto grayscale hover:grayscale-0" src={Procreate} alt="Procreate" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">Procreate</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20 w-auto grayscale hover:grayscale-0" src={PS} alt="Photoshop" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">Photoshop</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Image className="h-20 w-auto grayscale hover:grayscale-0" src={Reaper} alt="Reaper" />

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-2xl">Reaper</p>
          </TooltipContent>
        </Tooltip>

      </div>
    

    </main>
  )
}