import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

import Logo2 from '../../assets/svg/Logo2.svg'
import './navbar.css'

export default function Navbar() {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className='navbar'>
            
            <div className='navbar-content'>
                <a href='#home'>
                    <img className="logo" src={Logo2} alt="" />
                </a>

                <nav className={isOpen ? 'navlinks-mobile open' : 'navlinks-mobile close'} onClick={() => setOpen(false)}>
                    <a className='links' href="#home">Home</a>
                    <a className='links' href="#about">About</a>
                    <a className='links' href="#contact">Contact</a>
                </nav>

                <Hamburger
                    rounded
                    toggled={isOpen}
                    toggle={setOpen}
                    direction='left'
                    duration={0.4}
                />

                <nav className='navlinks'>
                    <a className='links' href="#home">Home</a>
                    <a className='links' href="#about">About</a>
                    <a className='links' href="#contact">Contact</a>
                </nav>
                
            </div>
        </div>
    )
}

