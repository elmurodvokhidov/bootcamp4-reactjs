import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function ProfileLayout() {
    return (
        <>
            <h1>Profile Page</h1>

            <nav>
                <NavLink to={'admins'}>Admins</NavLink>
                <NavLink to={'users'}>Users</NavLink>
            </nav>

            <Outlet />
        </>
    )
}

export default ProfileLayout