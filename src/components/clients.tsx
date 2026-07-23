"use client"

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"


import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import Image from "next/image"
import Tort from "../app/images/tort.png"
import Synthnode from "../app/images/synthnode.png"
import Clauduino from "../app/images/clauduino.png"
import Blissart from "../app/images/blissart.png"
import Documo from "../app/images/documo.png"
import Duon from "../app/images/duon.png"
import Gameworks from "../app/images/gameworks.png"
import Heyroomie from "../app/images/heyroomie.png"
import Hivehero from "../app/images/hivehero.png"
import Ikigaidojo from "../app/images/ikigaidojo.png"
import Metatech from "../app/images/metatech.png"
import Minglechain from "../app/images/minglechain.png"
import Mythmakers from "../app/images/mythmakers.png"
import Perle from "../app/images/perle.png"
import Prestige from "../app/images/prestige.png"
import Superfanz from "../app/images/superfanz.png"
import Mober from "../app/images/mober.png"

export default function Clients() {

  return (

    <Carousel
      plugins={[Autoplay({delay: 2500, }) ]}
      className="absolute left-0 top-0 w-full"

    >
      <CarouselContent className="px-8">
        
        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Mober} alt="Mober" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Mober</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>
        
        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Synthnode} alt="Synthnode" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Synthnode</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Clauduino} alt="Clauduinio" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Clauduinio</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Tort} alt="Mober" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Tort</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Blissart} alt="Blissart" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Blissart</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Documo} alt="Documo" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Documo</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Duon} alt="Duon" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Duon</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Gameworks} alt="Gameworks" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Gameworks</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Heyroomie} alt="Heyroomie" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Heyroomie</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Hivehero} alt="Hivehero" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Hivehero</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Ikigaidojo} alt="Ikigaidojo" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Ikigaidojo</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Metatech} alt="Metatech" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Metatech</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Minglechain} alt="Minglechain" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Minglechain</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>


        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Mythmakers} alt="Mythmakers" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Mythmakers</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Perle} alt="Perle" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Perle</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Prestige} alt="Prestige" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Prestige</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Superfanz} alt="Superfanz" />

            </TooltipTrigger>
            <TooltipContent>
              <p className="text-2xl">Superfanz</p>
            </TooltipContent>
          </Tooltip>
        </CarouselItem>


      </CarouselContent>
    
    </Carousel>
   
  )

}