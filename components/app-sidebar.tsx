import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
  
  export function AppSidebar() {
    return (
      <Sidebar className="bg-base-600" >
        <SidebarHeader className="text-theming-500" >

            <h2 className="w-full text-4xl text-theming text-center my-4">
                StudyIO
            </h2>

        </SidebarHeader>
        <SidebarContent>
            content
          <SidebarGroup>
            group 1
          </SidebarGroup>
          <SidebarGroup>
            group 2
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter> 
            footer
        </SidebarFooter>
      </Sidebar>
    )
  }
  