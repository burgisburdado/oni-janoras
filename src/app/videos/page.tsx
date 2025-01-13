import Spline from '@splinetool/react-spline/next'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Videos() {
  return (
    <main className="relative overflow-hidden border-l-2 border-l-[#BBFF00] h-screen w-full pr-8">
        <div className="absolute w-fit top-32 z-50 flex flex-col gap-10">
          <h1 className="text-stone-900 font-medium text-7xl">Videos Page</h1>
          <Carousel classaName="px-40">
            <CarouselContent>
              <CarouselItem><iframe width="560" height="315" src="https://www.youtube.com/embed/vFw9fHN6Bhc?si=GZZ4aCwVA9C-w01X&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></CarouselItem>
              <CarouselItem><iframe width="560" height="315" src="https://www.youtube.com/embed/vFw9fHN6Bhc?si=GZZ4aCwVA9C-w01X&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></CarouselItem>
              <CarouselItem><iframe width="560" height="315" src="https://www.youtube.com/embed/vFw9fHN6Bhc?si=GZZ4aCwVA9C-w01X&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></CarouselItem>
              <CarouselItem><iframe width="560" height="315" src="https://www.youtube.com/embed/vFw9fHN6Bhc?si=GZZ4aCwVA9C-w01X&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></CarouselItem>
              <CarouselItem><iframe width="560" height="315" src="https://www.youtube.com/embed/vFw9fHN6Bhc?si=GZZ4aCwVA9C-w01X&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <Spline
          className="absolute bottom-0 right-0 left-0 top-0 opacity-85"
          scene="https://prod.spline.design/LmPBvMHaN5kCCF0f/scene.splinecode" 
        />
        
    </main>
  )
}