import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <>
            <nav>
                <NavLink to={'/'}>home</NavLink>
                <NavLink to={'/magazine'}>Magazine</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer><h1>Footer</h1></footer>
        </>
    )
}

export default RootLayout