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
      id: "mj2tYy6OpPY",
      title: "Naa Nasad"
    },
    {
      id: "CQQvjXYMYUs",
      title: "Patas"
    }
  ];

  return (
    <main className="relative overflow-hidden border-l-2 border-l-[#BBFF00] h-screen w-full pr-8">
      {/* Content Wrapper with Better Positioning */}
      <div className="absolute flex w-full justify-items-center content-center gap-4 top-32 z-50 px-8">
        {videoConfigs.map((video, index) => (
          
          <div key={video.id} className="w-full aspect-video">
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
        ))}
          
      </div>
      
      {/* Spline Background with Performance Considerations */}
      <Spline
        className="absolute inset-0 opacity-85"
        scene="https://prod.spline.design/LmPBvMHaN5kCCF0f/scene.splinecode" 
      />
    </main>
  )
}