import React from 'react'
import AddProduct from '../Pages/AddProduct'
import Messages from '../Pages/Messages'
import NotFound from '../Pages/NotFound'
import {Routes, Route} from 'react-router-dom'

export default function MainContent() {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>اینجا خانه است</h1>} />
                <Route path="messages" element={<Messages />} />
                <Route path="products/add" element={<AddProduct />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}