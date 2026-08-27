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
import Link from "next/link"

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
              <Link href="https://www.figma.com/design/YjxsT0b2qabVFG2gmbHDuS/Synthnode-Prototype-Mockups?node-id=286-2453&t=YHpRNW3dMyyrT8EL-1" target="_blank">
              <p className="text-sm">View Figma Mockup</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Clauduino} alt="Clauduinio" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.behance.net/gallery/70025047/Clouduino-Logo" target="_blank">
              <p className="text-sm">View Logo Design</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Tort} alt="Mober" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.tortapp.com/" target="_link">
              <p className="text-sm">View Web App</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Blissart} alt="Blissart" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.behance.net/gallery/58523229/Blissart-Icons" target="_blank">
              <p className="text-sm">View Branding Illustrations</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Documo} alt="Documo" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.behance.net/gallery/67593261/Documo-Logo" target="_blank">
              <p className="text-sm">View Logo Design</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Duon} alt="Duon" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.figma.com/design/rte0WaewwI6fcuH43n2Ayk/Kiosk?node-id=3-9155&t=CqT8tZ0JOW8Zchaf-1" target="_blank">
              <p className="text-sm">View Figma mockup</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Gameworks} alt="Gameworks" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.behance.net/gallery/72332107/Featured-in-graphicmama-Top-Logo-Trends-for-2019" target="_blank">
              <p className="text-sm">View branding design</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Heyroomie} alt="Heyroomie" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.figma.com/design/8FiF0U9PTwJm48IcLJdGr7/Hey-Roomie?node-id=4008-3662&t=XTuZtxrBOrUu01Pf-1" target="_link">
              <p className="text-sm">View Figma Mockup</p>
              </Link>
              
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
              <Link href="https://www.behance.net/gallery/60059069/Ikigai-Dojo-Logo-Design" target="_blank">
              <p className="text-sm">View Logo Design</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Metatech} alt="Metatech" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.behance.net/gallery/92186455/Metatech-Lab-Logo-Design" target="_blank">
              <p className="text-sm">View Branding Design</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Minglechain} alt="Minglechain" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.behance.net/gallery/86518043/Minglechain" target="_blank">
              <p className="text-sm">View Logo Design</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>


        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Mythmakers} alt="Mythmakers" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.figma.com/proto/ueigBQ7sTqSl7eJevzqwqz/UI-UX-Prototype?node-id=131-13&viewport=464%2C632%2C0.08&t=Ae7qhLdMqjgYzoEn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=131%3A13&show-proto-sidebar=1&page-id=2%3A0" target="_blank">
              <p className="text-sm">View Figma Prototype</p>
              </Link>
              
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Perle} alt="Perle" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.figma.com/design/VCbORls1a9mrntBFghwMia/Perle.ai-Design?node-id=2002-1285&t=DRIVxpAZqNb1YEKX-1" target="_blank">
              <p className="text-sm">View Figma Mockup</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Prestige} alt="Prestige" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.figma.com/design/b2mpidGqyvBQRuE7m8cwBK/Product-Design?node-id=8106-4010&t=MHyLHxOSdmFyLEvI-1" target="_blank">
              <p className="text-sm">View Figma Mockup</p>
              </Link>
              
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>

        <CarouselItem className="h-48 w-48">
          <Tooltip>
            <TooltipTrigger asChild>
              <Image className="h-48 w-48 rounded-3xl" src={Superfanz} alt="Superfanz" />

            </TooltipTrigger>
            <TooltipContent>
              <Link href="https://www.figma.com/proto/5DlTk2Wg9j4aAlNd8jjSJz/Superfanz?node-id=209-18748&viewport=1344%2C467%2C0.14&t=UyxmR8ua6BPIPWAl-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=253%3A20206&show-proto-sidebar=1&page-id=0%3A1" target="_blank">
              <p className="text-sm">View Figma Prototype</p>
              </Link>
              
            </TooltipContent>
          </Tooltip>
        </CarouselItem>


      </CarouselContent>
    
    </Carousel>
   
  )

}