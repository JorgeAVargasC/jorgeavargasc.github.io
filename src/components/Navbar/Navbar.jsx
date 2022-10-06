import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import Logo2 from '../../assets/svg/Logo2.svg'
import styles from './Navbar.module.css'

export default function Navbar () {
  const [isOpen, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_content}>
        <a href='#home'>
          <img className={styles.logo} src={Logo2} alt='' />
        </a>

        <nav className={isOpen ? styles.navlinks_mobile + ' ' + styles.open : styles.navlinks_mobile + ' ' + styles.close} onClick={() => setOpen(false)}>
          <a className={`${styles.links} ${activeLink === 'home' ? styles.active_link : ''}`} href='#home' onClick={() => { setActiveLink('home') }}>Home</a>
          <a className={`${styles.links} ${activeLink === 'about' ? styles.active_link : ''}`} href='#about' onClick={() => { setActiveLink('about') }}>About</a>
          <a className={`${styles.links} ${activeLink === 'projects' ? styles.active_link : ''}`} href='#projects' onClick={() => { setActiveLink('projects') }}>Projects</a>
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
          <a className={`${styles.links} ${activeLink === 'projects' ? styles.active_link : ''}`} href='#projects' onClick={() => { setActiveLink('projects') }}>Projects</a>
        </nav>
      </div>
    </div>
  )
}
