import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuPortal, DropdownMenuSubContent } from './ui/dropdown-menu.jsx'
import { School } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar.jsx';
import { DarkMode } from './DarkMode.jsx';
import MobileNavbar from './MobileNavbar.jsx';

export default function Navbar() {
  const user = true;
  
  return (
    <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
      {/* desktop mode */}
      <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full'>
        <div className='flex items-center gap-2'>
          <School size={"30"} />
          <h1 className='hidden md:block font-extrabold text-2xl'>E-Learning</h1>
        </div>

        {/* user icon and darkmode */}
        <div className='flex items-center gap-5'>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuItem>
                  Profile

                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing

                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings

                </DropdownMenuItem>


                <DropdownMenuItem>
                  Log out
                  
                </DropdownMenuItem>
                <DropdownMenuItem>
                 Dashboard
                  
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className='flex items-center gap-2 '>
              <Button variant="outline">Login</Button>
              <Button>Signup</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* mobile device */}
      <div className='flex md:hidden items-center justify-between px-4 h-full' >
        <h1 className='font-extrabold text-2xl' >E-Learning</h1>
        <MobileNavbar />
      </div>

    </div>
  )
}

