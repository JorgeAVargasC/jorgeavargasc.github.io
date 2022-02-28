import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import 'animate.css';
import './navbar.css'



export default function Navbar() {

    const [isOpen, setOpen] = useState(false)
    const [anim, setAnim] = useState('animate__animated animate__slideInRight')

    return (
        <div className='navbar'>
            <nav>
                <h3>JV</h3>

                <ul
                    className={isOpen ? `navlinks-mobile ${anim}` : 'navlinks'}
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

