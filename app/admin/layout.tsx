import AppSidebar from "@/components/app-sidebar"
import { ModeToggle } from "@/components/dark-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import type React from "react"

export default function AdminsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen">
        <AppSidebar role="ADMIN" />
        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between px-4 py-3 border-b border-base-300  bg-theming dark:bg-custom-blue-midnight dark:border-custom-blue-midnight">
            <SidebarTrigger />
            <div className="flex items-center gap-4">
              <Avatar className="border-2 border-base-400">
                <AvatarImage src="https://entzones.web.app/mavka.jpg" />
                <AvatarFallback>TN</AvatarFallback>
              </Avatar>
              <ModeToggle />
            </div>
          </header>
          <main className="flex-1 overflow-auto bg-theming-100 dark:bg-base-100">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

