import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './navbar.css'
import Logo2 from '../../assets/svg/Logo2.svg'

export default function Navbar() {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <a href='#home'>
                    <img className="logo" src={Logo2} alt="" />
                </a>
                <nav className={isOpen ? 'navlinks-mobile' : 'navlinks'} onClick={() => setOpen(false)}>
                    <a className='links' href="#home">Home</a>
                    <a className='links' href="#about">About</a>
                    <a className='links' href="#contact">Contact</a>
                </nav>
                <Hamburger
                    rounded
                    toggled={isOpen}
                    toggle={setOpen}
                    direction='left'
                    duration={0.6}
                />
            </div>
        </div>
    )
}

