import React from 'react';
import Sidebar from './AdminSidebar/Sidebar'
import Header from './AdminHeader/Header'

export default function Panel() {
    return (
        <section className='flex h-full'>

            <Sidebar />

            <div className="flex-1 w-full md:w-8/12 lg:w-4/6">
                <Header />

            </div>


        </section >
    )
}