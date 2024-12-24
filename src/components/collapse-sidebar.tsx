'use client'

import Link from "next/link"
import { Clapperboard, FileImage, Music, User, Workflow } from "lucide-react"
import { usePathname } from "next/navigation"

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
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-6">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Link
                href={item.path}
                className="flex gap-4 active:text-[#BBFF00] focus:text-[#BBFF00] uppercase font-medium"
              >
                <item.icon/>
                {item.name}
              </Link>
            </li>

          )

        })}
      </ul>
    </nav>
  )
};