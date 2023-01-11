import React from 'react';
import Sidebar from './AdminSidebar/Sidebar'
import Header from './AdminHeader/Header'

export default function Panel() {
    return (
        <section className='flex h-full'>

            <Sidebar />
            <Header />

        </section>
    )
}