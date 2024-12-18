import { Clapperboard, FileImage, Music, User, Workflow } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Work",
    url: "/work",
    icon: Workflow,
  },
  {
    title: "Videos",
    url: "/videos",
    icon: Clapperboard,
  },
  {
    title: "Graphics",
    url: "/graphics",
    icon: FileImage,
  },
  {
    title: "Music",
    url: "/music",
    icon: Music,
  },
  {
    title: "About",
    url: "/about",
    icon: User,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="pr-4">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex flex-col">
              <a href="/" className="text-stone-300 text-2xl font-['RedSeven'] flex flex-col">
                <div><span className="text-[#45EAD9]">O</span>NI</div>
                <div><span className="text-[#BBFF00]">J</span>ANORAS</div>
              </a>
              <div className="flex flex-row gap-2 text-sm">
                <span>Head of Design</span>
                <span>.</span>
                <span>UI / UX Engineer</span>
              </div>
            </div>
           
            
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupContent>
            <div className="flex gap-2">
              <a className="hover:text-stone-500 text-stone-700 text-sm" href="mailto:oznai01@gmail.com" target="_blank">Email</a>
              <span>.</span>
              <a className="hover:text-stone-500 text-stone-700 text-sm" href="https://www.linkedin.com/in/burgisburdado/" target="_blank">LinkedIn</a>
              <span>.</span>
              <a className="hover:text-stone-500 text-stone-700 text-sm" href="https://www.proudcloud.io" target="_blank">Proudcloud</a>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
