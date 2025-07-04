import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"

export const metadata: Metadata = {
  title: "Oni Janoras",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-950">
        <SidebarProvider>
          <AppSidebar />
          <main className="relative w-full">
            <SidebarTrigger className="absolute left-1 top-1 z-10" />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
