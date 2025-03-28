import Spline from '@splinetool/react-spline/next'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Videos() {
  // Array of video configurations for easier management
  const videoConfigs = [
    {
      id: "vFw9fHN6Bhc",
      title: "First Video Showcase"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Second Video Showcase"
    },
    {
      id: "3JluqThjrK8",
      title: "Third Video Showcase"
    },
    {
      id: "JGwehk6j_r0",
      title: "Fourth Video Showcase"
    },
    {
      id: "oYmzdvMoUUA",
      title: "Fifth Video Showcase"
    }
  ];

  return (
    <main className="relative overflow-hidden border-l-2 border-l-[#BBFF00] h-screen w-full pr-8">
      {/* Content Wrapper with Better Positioning */}
      <div className="absolute w-full top-32 z-50 px-8 md:px-16 lg:px-40">
        <h1 className="text-stone-900 font-medium text-4xl md:text-6xl lg:text-7xl mb-10">
          Videos Page
        </h1>
        
        {/* Responsive Carousel */}
        <Carousel className="w-full opacity-75 hover:opacity-100">
          <CarouselContent>
            {videoConfigs.map((video, index) => (
              <CarouselItem 
                key={video.id} 
                className="flex justify-center items-center"
              >
                <div className="w-full max-w-4xl aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.id}?si=GZZ4aCwVA9C-w01X&amp;controls=0`} 
                    title={`${video.title} - Video ${index + 1}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons with Responsive Positioning */}
          <CarouselPrevious className="left-0 md:left-4 lg:left-8" />
          <CarouselNext className="right-0 md:right-4 lg:right-8" />
        </Carousel>
      </div>
      
      {/* Spline Background with Performance Considerations */}
      <Spline
        className="absolute inset-0 opacity-85"
        scene="https://prod.spline.design/LmPBvMHaN5kCCF0f/scene.splinecode" 
      />
    </main>
  )
}