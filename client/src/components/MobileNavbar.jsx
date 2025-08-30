import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Menu } from 'lucide-react'
import { DropdownMenu } from './ui/dropdown-menu'
import { DropdownMenuTrigger, Separator } from '@radix-ui/react-dropdown-menu'
import { DarkMode } from './DarkMode'

const MobileNavbar = () => {
    const role = "instructor"
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" className="rounded-full bg-gray-200 hover:bg-gray-200" variant="outline"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className='flex flex-col' >
                <SheetHeader className=" flex flex-row items-center justify-between mt-2">
                    <SheetTitle>E-Learning    </SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <Separator className='mr-2' />
                <nav className='flex flex-col px-8 space-y-4 '>
                    <span>My Learning</span>
                    <span>Edit Profile</span>
                    <p>Logout</p>
                </nav>
                {
                    role === "instructor" && (<SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">DashBoard</Button>

                        </SheetClose>
                    </SheetFooter>)
                }

            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar