'use client'

import { Clapperboard, FileImage, Music, User, Workflow } from "lucide-react"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, buttonVariants } from "./ui/button";

const items = [
  {
    id: 1,
    name: "Work",
    path: "/work",
    icon: Workflow,
  },
  {
    id: 2,
    name: "Videos",
    path: "/videos",
    icon: Clapperboard,
  },
  {
    id: 3,
    name: "Graphics",
    path: "/graphics",
    icon: FileImage,
  },
  {
    id: 4,
    name: "Music",
    path: "/music",
    icon: Music,
  },
  {
    id: 5,
    name: "About",
    path: "/about",
    icon: User,
  },
];

export default function CollapsSidebar() {
  const router = useRouter(); 
  const [activeButton, setActiveButton] = useState<string | null>(null);

  return (
    <nav>
      <ul className="pl-2 flex flex-col gap-6">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col">
            <Button
              onClick={() => {
                router.push(item.path);
                setActiveButton(item.path);
              }}
              variant={activeButton === item.path ? "link" : "outline"}
              className={`
                flex gap-4 text-lg tracking-wide font-bold uppercase border-none no-underline
                ease-in-out duration-300 
                ${activeButton === item.path ? 'text-[#BBFF00] no-underline' : 'text-stone-400 '}
              `}
            >
              <item.icon className="mr-2"/>
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}