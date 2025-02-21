'use client';

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { BellIcon, ChevronDownCircle, CogIcon, LogOutIcon, User2Icon } from 'lucide-react';
import { Button } from "./ui/button";

export default function AppFooter() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-school-green-400 rounded-md shadow-md dark:bg-school-green-700 dark:text-base-100">
      {/* Avatar and User Info */}
      <div className="flex items-center gap-4">
        <Avatar className="border-2 bg-base-100 dark:bg-school-green-600 dark:border-school-green-500">
          <AvatarImage src="https://entzonex.web.app" />
          <AvatarFallback>Si</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h1 className="text-sm font-semibold italic text-gray-800 dark:text-white">Charles Knix</h1> {/* Adjusted text color for dark mode */}
          <p className="text-xs font-medium text-gray-600 dark:text-gray-300">Technical studies</p> {/* Adjusted text color for dark mode */}
        </div>
      </div>

      {/* Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger className="w-10 h-10 p-2 flex items-center justify-center rounded-full border-2 border-base-200 hover:bg-school-green-300 dark:border-school-green-500 dark:hover:bg-school-green-600">
          <CogIcon size={22} className="text-gray-800 dark:text-white" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-44 w-max mt-2 bg-base-100 bg-custom-nyanza dark:bg-slate-900 dark:text-custom-nyanza rounded-lg shadow-lg">
          <DropdownMenuLabel className="text-center font-bold text-xl text-school-green-500 dark:text-base-100">
            My Account
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="h-px bg-base-200 dark:bg-school-green-500" />

          <DropdownMenuItem className="flex items-center gap-2 py-2 text-sm text-gray-700 dark:text-custom-nyanza hover:bg-school-green-200 dark:hover:bg-school-green-500 rounded-md">
            <User2Icon size={18} />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 py-2 text-sm text-gray-700 dark:text-custom-nyanza hover:bg-school-green-200 dark:hover:bg-school-green-500 rounded-md">
            <BellIcon size={18} />
            Notifications
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 py-2 text-sm text-gray-700 dark:text-custom-nyanza hover:bg-school-green-200 dark:hover:bg-school-green-500 rounded-md">
            <CogIcon size={18} />
            Settings
          </DropdownMenuItem>

          <DropdownMenuSeparator className="h-px bg-base-200 dark:bg-school-green-500" />

          <DropdownMenuItem className="flex items-center gap-2 py-2 hover:bg-red-400">
            <Button variant="ghost" className="flex items-center gap-2 text-sm text-red-500 dark:text-red-200 hover:bg-red-400 hover:text-custom-nyanza">
              <LogOutIcon size={18} />
              Log Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
