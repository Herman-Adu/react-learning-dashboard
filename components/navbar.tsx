'use client'

import { Calendar, Cog, Home, LogIn, LogOut, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { SidebarMenuButton, SidebarTrigger } from './ui/sidebar'

const Navbar = () => {
  //const { theme, setTheme } = useTheme();
  const { setTheme } = useTheme()

  /* using custom buttons    
    const { toggleSidebar } = useSidebar(); 
  */

  return (
    <nav className='sticky top-0 z-10 flex items-center justify-between bg-background p-4'>
      {/* Left */}
      <SidebarTrigger className='mb-[3px]' />

      {/* using custom buttons
        <Button variant="outline" onClick={toggleSidebar}>
            Custm Button
        </Button> 
      */}

      {/* Right */}
      <div className='flex items-center gap-4'>
        {/* <Link href='/'>Home</Link> */}

        <Button variant='outline' size='icon'>
          <Link href='/'>
            <Home />
          </Link>
        </Button>

        {/* Theme Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src='/herman-profile-v3.jpg' />
              <AvatarFallback>HA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/user-settings'>
                  <Cog />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/calendar'>
                  <Calendar />
                  <span>Inbox</span>
                </Link>
              </SidebarMenuButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/'>
                  <LogOut />
                  <span>Logout</span>
                </Link>
              </SidebarMenuButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/authentication'>
                  <LogIn />
                  <span>Log in</span>
                </Link>
              </SidebarMenuButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Navbar
