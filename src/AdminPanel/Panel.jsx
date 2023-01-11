import React from 'react';
import Sidebar from './AdminSidebar/Sidebar'
import Header from './AdminHeader/Header'
// import MainContent from './MainPanel/MainContent';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddProduct from './Pages/AddProduct'
import Messages from './Pages/Messages'
import NotFound from './Pages/NotFound'

export default function Panel() {
    return (
        <BrowserRouter>
            <section className='flex h-full'>

                <Sidebar />

                <div className="flex-1 w-full md:w-8/12 lg:w-4/6">

                    <Header />

                    <Routes>

                        <Route path="/" element={<h1>اینجا خانه است</h1>} />
                        <Route path="messages" element={<Messages />} />
                        <Route path="products" element={<AddProduct />} />
                        <Route path="*" element={<NotFound />} />

                    </Routes>
                </div>


            </section >
        </BrowserRouter>
    )
}