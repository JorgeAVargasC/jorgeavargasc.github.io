import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import './navbar.css'
import Logo2 from '../../assets/svg/Logo2.svg'


export default function Navbar() {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className='navbar'>
            <nav>
                <a href='#home'>
                    <img className="logo" src={Logo2} alt="" />
                </a>


                <ul
                    className={isOpen ? 'navlinks-mobile' : 'navlinks'}
                    onClick={() => setOpen(false)}
                >

                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>

                <Hamburger
                    rounded
                    toggled={isOpen}
                    toggle={setOpen}
                    direction='left'
                    duration={0.6}
                />

            </nav>

        </div>
    )
}

