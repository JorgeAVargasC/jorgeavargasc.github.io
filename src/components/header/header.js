import React, { Component } from 'react'
import Navbar from '../nav/navbar'

export default class Header extends Component {
    render() {
        return (
            <div id='home' className='container'>
                <Navbar/>
                <h1>Jorge Vargas</h1>                
            </div>
        )
    }
}

