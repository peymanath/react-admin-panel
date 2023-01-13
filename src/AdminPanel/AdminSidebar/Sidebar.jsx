import React from 'react'
import ProfileImage from '../../Components/ProfileImage'
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import SidebarNav from './SidebarNav';

export default function Sidebar(Data) {


    return (
        <aside className={`sidebar-menu overflow-y-auto hidden h-full md:flex md:flex-col bg-gray-900 text-white ${Data.Active ? 'md:w-[70px]' : 'md:w-[200px]'}`}>
            <header className=" bg-green-500">

                <div className="flex py-3 px-4">

                    <div className={`flex items-center ${Data.Active ? 'justify-center' : 'justify-between'} bg-gray-900 hover:bg-gray-800 duration-300 transition-colors text-white w-full rounded-md`}>

                        <div onClick={Data.click} className="btn-menu flex py-1.5 px-2 cursor-pointer">

                            <Bars3BottomRightIcon className='w-6 h-6 text-white' />

                        </div>

                        <Link key="Pabel" to="/" className={`${Data.Active ? 'hidden' : 'flex'} items-center justify-between gap-x-2 py-1.5 px-2 text-sm w-3/4`}>

                            <span className="hidden sm:flex">پنل کاربری</span>

                            <ProfileImage imgClassName="w-6 h-6rounded-full" imgAlt="عکس پروفایل"/>

                        </Link>

                    </div>


                </div>

            </header>

            <SidebarNav menuActive={Data.Active} />

        </aside>
    )
}