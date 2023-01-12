import React, { useState } from 'react';
import Sidebar from './AdminSidebar/Sidebar'
import Header from './AdminHeader/Header'
import MainContent from './MainContent';
import { BrowserRouter } from 'react-router-dom'


export default function Panel() {

    const [wisthSidebar, setWisthSidebar] = useState(false);

    const ClickMenu = () => {
        setWisthSidebar(!wisthSidebar)
    }

    return (
        <BrowserRouter>

            <section className='flex h-full'>


                <div className='fixed h-full z-[999]'>
                    <Sidebar click={ClickMenu} Active={wisthSidebar} />
                </div>

                <div className={`flex-1 w-full pr-0 md:w-8/12 ${wisthSidebar ? "md:pr-[70px]" : "md:pr-[200px]"}  duration-300`}>

                    <Header />

                    <MainContent />

                </div>


            </section >

        </BrowserRouter>
    )
}