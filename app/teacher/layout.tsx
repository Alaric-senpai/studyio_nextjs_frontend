import { AppSidebar } from '@/components/app-sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { BellIcon, ChevronDownCircle, CogIcon, LogOutIcon, User2Icon } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'

const TeachersLayout = ({children}: Readonly<{children:React.ReactNode}>) => {
    // const router = useRouter()
  return (
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <div className="navbar flex flex-row items-center justify-between px-4 py-3 border-b sticky top-0 bg-theming">
            <SidebarTrigger />
            <div className="avatar flex flex-row gap-2">
                <Avatar>
                    <AvatarImage src='https://entzones.web.app/mavka.jpg' />
                    <AvatarFallback>
                        SI
                    </AvatarFallback>
                </Avatar>
                <DropdownMenu>
                    <DropdownMenuTrigger className='w-10 h-10 flex items-center justify-center rounded-full'>
                        <ChevronDownCircle size={19} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-44 mr-4'>
                        <DropdownMenuLabel className='text-center'>
                            My Account
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='p-3' >
                            <User2Icon />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className='p-3'>
                            <BellIcon />
                            Notifications
                        </DropdownMenuItem>
                        <DropdownMenuItem className='p-3'>
                            <CogIcon />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Button variant={'ghost'}>
                                <LogOutIcon />
                                Log Out
                            </Button>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            </div>
            {children}
        </SidebarInset>
    </SidebarProvider>
  )
}

export default TeachersLayout