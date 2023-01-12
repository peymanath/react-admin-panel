import React from 'react'
import ProfileImage from '../../Images/profileImage.svg'
import Menu from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import SidebarNav from './SidebarNav';

export default function Sidebar(Data) {


    return (
        <aside className={`sidebar-menu overflow-y-auto h-full md:flex md:flex-col bg-c-gray text-white ${Data.Active ? 'md:w-[70px]' : 'md:w-[265px]'}`}>
            <header className="bg-primary">
                
                <div className="flex py-3 px-4">

                    <div className={`flex items-center ${Data.Active ? 'justify-center' : 'justify-between'} bg-c-gray text-white w-full rounded-md`}>

                        <div onClick={Data.click} className="btn-menu flex py-1.5 px-2 cursor-pointer">

                            <Menu></Menu>
                            
                        </div>

                        <Link key="Pabel" to="/" className={`${Data.Active ? 'hidden' : 'flex'} items-center justify-between gap-x-2 py-1.5 px-2 hover:bg-[#283543] duration-300 transition-colors text-sm w-3/4`}>

                            <span className="hidden sm:flex">پنل کاربری</span>

                            <img src={ProfileImage} alt="Profile Logo" className="w-6 h-6 rounded-sm" />

                        </Link>

                    </div>


                </div>

            </header>

            <SidebarNav menuActive={Data.Active} />

        </aside>
    )
}