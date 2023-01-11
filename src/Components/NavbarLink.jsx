import React from 'react'
import { NavLink  , useLocation} from 'react-router-dom'

export default function NavbarLink(link) {
    return (
        <>

            <NavLink to={link.to} />

        </>
    )
}