"use client";
import HoverCard from "@/components/hover-card"
import BCPatas from "../app/images/bc-patas.png"
import Roomie from "../app/images/featured-roomie.png"
import Tort from "../app/images/featured-tort.png"
import Duon from "../app/images/featured-duon.png"
import Metatech from "../app/images/featured-metatech.png"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Featured() {

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true,    // Run animations only once
    });
  }, []);

  return (

    <main>

      <div className="grid grid-cols-3 grid-rows-2 gap-2 px-10">
        <div data-aos="fade-up" data-aos-delay="200">
          <HoverCard
            data-aos="fade-up" 
            image={BCPatas.src}
            title="Black Canvas - Patas"
            description="A Cebu, Philippine based band Lyric Video."
            task="Video Director, Editor, concept, drummer"
            url="https://youtu.be/FIPOdovEwyw?si=uwk1HUH512AzAAdW"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <HoverCard
            data-aos="fade-up" 
            image={Roomie.src}
            title="Hey Roomie"
            description="a fan engagement and community-building platform that acts as a virtual home base for content creators, organizations, and their fans."
            task="UI/UX Design, Mobile App, Admin CMS"
            url="https://heyroomie.vip/"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <HoverCard
            
            image={Tort.src}
            title="Tort"
            description="A cloud-based business management platform designed specifically for personal injury law firms in US."
            task="UI/UX Design, Static Website"
            url="https://www.tortapp.com/"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <HoverCard
            
            image={Duon.src}
            title="Duon"
            description="The Philippines first real-time indoor navigation app. Find shops, ATMs, restrooms, elevators, and more with just a few taps."
            task="UI/UX Design, Responsive Design, Admin CMS, Kiosk UI/UX"
            url="https://duon.ph/"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
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