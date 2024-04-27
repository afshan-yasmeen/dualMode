"use client"

import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
import ToggleMode from '@/components/Toggle'
  
const Navbar = () => {
  return (
    <div className='p-5 bg-secondary w-full'>
  <NavigationMenu className='flex justify-between max-w-6xl w-full '>
    <NavigationMenuList className='flex items-center gap-5'>
    <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        
    </NavigationMenuList>

    <NavigationMenuList className='flex items-center gap-5'>
    <NavigationMenuItem>
              <ToggleMode/>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink>
              Login
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

    </NavigationMenuList>
    
    
   
  </NavigationMenu>
    </div>
  
  
  )
}

export default Navbar