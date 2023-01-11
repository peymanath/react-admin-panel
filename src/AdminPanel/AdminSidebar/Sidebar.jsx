import React, { Image } from 'react'
import ProfileImage from '../../Images/profileImage.svg'
import Menu from '@mui/icons-material/Menu';

export default function Sidebar() {
    return (
        <aside className='sidebar-menu hidden md:flex md:flex-col bg-gray text-white'>
            <header className="bg-primary">

                <div className="flex py-3 px-4">

                    <div className="flex gap-x-5 bg-gray text-white w-full rounded-md">
                        <div className="btn-menu flex py-1.5 px-2 cursor-pointer">
                            <Menu></Menu>
                        </div>
                        <a href="#" className="PanelBtnSidebar flex items-center justify-between gap-x-2 py-1.5 px-2 hover:bg-[#283543] duration-300 transition-colors text-sm w-2/3">

                            <span className="hidden sm:flex">پنل کاربری</span>

                            <img src={ProfileImage} alt="Profile Logo" className="w-6 h-6 rounded-sm" />

                        </a>
                    </div>

                </div>

            </header>
        </aside>
    )
}