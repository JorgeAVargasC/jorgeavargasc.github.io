import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import Logo2 from '../../assets/svg/Logo2.svg'
import styles from './Navbar.module.css'
import { FaHouseUser, FaClipboardList } from 'react-icons/fa'
import { BsFillInfoSquareFill, BsBriefcaseFill } from 'react-icons/bs'

export default function Navbar () {
  const [isOpen, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  const links = [
    {
      id: 1,
      name: 'home',
      icon: <FaHouseUser />
    },
    {
      id: 2,
      name: 'about',
      icon: <BsFillInfoSquareFill />
    },
    {
      id: 3,
      name: 'courses',
      icon: <BsBriefcaseFill />
    },
    {
      id: 4,
      name: 'projects',
      icon: <FaClipboardList />
    }
  ]

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_content}>
        <a href='#home'>
          <img className={styles.logo} src={Logo2} alt='' />
        </a>

        <nav className={isOpen ? styles.navlinks_mobile + ' ' + styles.open : styles.navlinks_mobile + ' ' + styles.close} onClick={() => setOpen(false)}>
          {links.map(link =>
            <a
              key={link.id}
              href={'#' + link.name}
              className={`${styles.links} ${activeLink === link.name ? styles.active_link : ''}`}
              onClick={() => setActiveLink(link.name)}
            >
              {link.icon}
              {link.name}
            </a>
          )}

        </nav>

        <div className={styles.hamburger_react}>
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            direction='left'
            duration={0.4}
          />
        </div>

        <nav className={styles.navlinks}>
          <a className={`${styles.links} ${activeLink === 'home' ? styles.active_link : ''}`} href='#home' onClick={() => { setActiveLink('home') }}>Home</a>
          <a className={`${styles.links} ${activeLink === 'about' ? styles.active_link : ''}`} href='#about' onClick={() => { setActiveLink('about') }}>About</a>
          <a className={`${styles.links} ${activeLink === 'courses' ? styles.active_link : ''}`} href='#courses' onClick={() => { setActiveLink('courses') }}>Courses</a>
          <a className={`${styles.links} ${activeLink === 'projects' ? styles.active_link : ''}`} href='#projects' onClick={() => { setActiveLink('projects') }}>Projects</a>
        </nav>
      </div>
    </div>
  )
}
