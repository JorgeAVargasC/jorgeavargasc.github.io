'use client'
import {
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
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { TbMoon, TbSun } from 'react-icons/tb'

export const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  const pathname = usePathname()

  const menuItems = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Services',
      href: '/services'
    },
    {
      name: 'Examples',
      href: '/examples'
    }
  ]

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
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.href}-${index}`}>
            <Link color={pathname === item.href ? 'primary' : 'foreground'} href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <div onClick={toggleTheme} aria-label='Toggle theme' className='cursor-pointer'>
          {theme === 'dark' ? <TbMoon size={24} /> : <TbSun size={24} />}
        </div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link
              color={pathname === item.href ? 'primary' : 'foreground'}
              className='w-full'
              href='#'
              size='lg'
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
