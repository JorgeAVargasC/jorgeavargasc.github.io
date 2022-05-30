import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import Logo2 from '../../assets/svg/Logo2.svg'
import styles from './Navbar.module.css'

export default function Navbar() {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_content}>
                <a href='#home'>
                    <img className={styles.logo} src={Logo2} alt="" />
                </a>

                <nav className={isOpen ? styles.navlinks_mobile + " " + styles.open : styles.navlinks_mobile +" "+ styles.close} onClick={() => setOpen(false)}>
                    <a className={styles.links} href="#home">Home</a>
                    <a className={styles.links} href="#about">About</a>
                    <a className={styles.links} href="#contact">Contact</a>
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
                    <a className={styles.links} href="#home">Home</a>
                    <a className={styles.links} href="#about">About</a>
                    <a className={styles.links} href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    )
}

