import React, { Component } from 'react'
import TextLoop from 'react-text-loop'
import Navbar from '../nav/navbar'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div id='home' className='container'>
                <Navbar />

                <h1 className='presentation'>
                    <span>Hi,</span>
                    <span>I'm Jorge Vargas a</span>
                    <div>
                        <TextLoop interval={2000}>
                            <span className='txt-blue'>Front-end</span>
                            <span className='txt-green'>Back-end</span>
                        </TextLoop>{" "}
                        <span>Developer</span>
                    </div>
                    <a className='button' href='#about'>
                        <span>See Who I'm</span>
                    </a>
                </h1>



            </div>
        )
    }
}

