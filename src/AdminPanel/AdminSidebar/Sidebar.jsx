import React, { useState } from 'react'
import ProfileImage from '../../Images/profileImage.svg'
import Menu from '@mui/icons-material/Menu'
import { BrowserRouter, Link } from 'react-router-dom'
import SidebarNav from './SidebarNav';

export default function Sidebar() {

    const [wisthSidebar, setWisthSidebar] = useState(false);

    return (
        <aside className={`sidebar-menu hidden md:flex md:flex-col bg-c-gray text-white ${wisthSidebar ? 'w-[70px]' : ''}`}>
            <header className="bg-primary">

                <div className="flex py-3 px-4">
                    <div className="flex bg-c-gray text-white w-full rounded-md">
                        <div onClick={() => setWisthSidebar(!wisthSidebar)} className="btn-menu flex py-1.5 px-2 cursor-pointer">
                            <Menu></Menu>
                        </div>
                        <Link key="Pabel" to="/" className={`${wisthSidebar ? 'hidden' : 'flex'} items-center justify-between gap-x-2 py-1.5 px-2 hover:bg-[#283543] duration-300 transition-colors text-sm w-3/4`}>

                            <span className="hidden sm:flex">پنل کاربری</span>

                            <img src={ProfileImage} alt="Profile Logo" className="w-6 h-6 rounded-sm" />

                        </Link>
                    </div>


                </div>

            </header>

            <SidebarNav menuActive={wisthSidebar} />

        </aside>
    )
}