'use client'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import { useThemeStore } from '@store/theme'
import { useState } from 'react'
import { TbMoon, TbSun } from 'react-icons/tb'

export const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  const menuItems = ['Home', 'About Me', 'Courses', 'Projects']

  return (
    <Navbar maxWidth='2xl' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <p className='font-bold text-inherit'>ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Courses
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <div
          onClick={toggleTheme}
          className='grid h-8 w-8 cursor-pointer place-items-center rounded-lg border border-gray-500'
        >
          {theme === 'dark' ? <TbMoon size={20} /> : <TbSun size={20} />}
        </div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
