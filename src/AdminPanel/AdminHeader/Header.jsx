import React from 'react'
import Menu from '@mui/icons-material/Menu';
import SearchForm from '../../Components/SearchForm';
import ProfileImage from '../../Components/ProfileImage';
import Iconheader from './Iconheader';
import NotificationsActive from '@mui/icons-material/NotificationsActive'

export default function Header() {
    return (
        <div className="flex-1 w-full md:w-8/12 lg:w-4/6">

            <header className="bg-white border-b border-[#a1a1a13e] shadow-md">

                <div className="flex items-center justify-between py-3 px-5">

                    <div className="flex items-center md:hidden flex-wrap gap-x-5">

                        <div className="btn-menu-mobile flex bg-[#F2F4F6] text-[#616262] border border-input p-2 rounded-md cursor-pointer">
                            <Menu></Menu>
                        </div>

                        <ProfileImage />

                    </div>

                    <SearchForm />

                    <div className="flex flex-wrap gap-3">

                        <Iconheader Counter={''} color={["bg-red-500" , "hover:bg-red-500"]} counter={(10)}>
                            <NotificationsActive/>
                            <NotificationsActive sx={{fontSize: 15}}/>
                        </Iconheader>

                        <Iconheader Counter={''} color={["bg-yellow-500" , "hover:bg-yellow-500"]} counter={(10)}>
                            <NotificationsActive/>
                            <NotificationsActive sx={{fontSize: 15}}/>
                        </Iconheader>

                        <Iconheader Counter={''} color={["bg-yellow-500" , "hover:bg-yellow-500"]} counter={(10)}>
                            <NotificationsActive/>
                            <NotificationsActive sx={{fontSize: 15}}/>
                        </Iconheader>

                        <Iconheader Counter={''} color={["bg-yellow-500" , "hover:bg-yellow-500"]} counter={(10)}>
                            <NotificationsActive/>
                            <NotificationsActive sx={{fontSize: 15}}/>
                        </Iconheader>

                        <Iconheader Counter={''} color={["bg-yellow-500" , "hover:bg-yellow-500"]} counter={(10)}>
                            <NotificationsActive/>
                            <NotificationsActive sx={{fontSize: 15}}/>
                        </Iconheader>

                    </div>

                </div>

            </header>


        </div>
    )
}

