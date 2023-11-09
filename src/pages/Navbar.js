import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <h1 className="logo">Logo</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="profile">Profile</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar