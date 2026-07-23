import HoverCard from "@/components/hover-card"
import BCPatas from "../app/images/bc-patas.png"
import Roomie from "../app/images/featured-roomie.png"
import Tort from "../app/images/featured-tort.png"
import Duon from "../app/images/featured-duon.png"
import Metatech from "../app/images/featured-metatech.png"

export default function Featured() {
  return (

    <main>

      <div className="grid grid-cols-3 grid-rows-2 gap-2 px-10">
        <div>
          <HoverCard 
            image={BCPatas.src}
            title="Black Canvas - Patas"
            description="A Cebu, Philippine based band Lyric Video."
            task="Video Director, Editor, concept, drummer"
            url="https://youtu.be/FIPOdovEwyw?si=uwk1HUH512AzAAdW"
          />
        </div>

        <div>
          <HoverCard 
            image={Roomie.src}
            title="Hey Roomie"
            description="a fan engagement and community-building platform that acts as a virtual home base for content creators, organizations, and their fans."
            task="UI/UX Design, Mobile App, Admin CMS"
            url="https://heyroomie.vip/"
          />
        </div>

        <div>
          <HoverCard 
            image={Tort.src}
            title="Tort"
            description="A cloud-based business management platform designed specifically for personal injury law firms in US."
            task="UI/UX Design, Static Website"
            url="https://www.tortapp.com/"
          />
        </div>

        <div>
          <HoverCard 
            image={Duon.src}
            title="Duon"
            description="The Philippines first real-time indoor navigation app. Find shops, ATMs, restrooms, elevators, and more with just a few taps."
            task="UI/UX Design, Responsive Design, Admin CMS, Kiosk UI/UX"
            url="https://duon.ph/"
          />
        </div>

        <div>
          <HoverCard 
            image={Metatech.src}
            title="Metatech Lab"
            description="Research and development company focus on building products that harness the power of sensors"
            task="Branding Design"
            url="https://sleepy-cori-fa09d4.netlify.app/"
          />
        </div>

      
       
      </div>
    
    </main>

  )


}