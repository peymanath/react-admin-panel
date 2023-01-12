import React from 'react'
import Products from './Pages/Product/Products'
import AddProduct from './Pages/Product/AddProduct'
import ProductCategories from './Pages/Product/ProductCategories'
import ProductAttributes from './Pages/Product/ProductAttributes'
import ProductBrands from './Pages/Product/ProductBrands'
import Messages from './Pages/Messages'
import NotFound from './Pages/NotFound'
import { Routes, Route } from 'react-router-dom'

export default function MainContent() {
    return (
        <>
            <Routes>

                {/* Home Page */}
                <Route path="/" element={<h1>اینجا خانه است</h1>} />

                {/* Message Pages */}
                <Route path="messages" element={<Messages />} />

                {/* Product Pages */}
                <Route path="products" element={<Products />} />
                <Route path="products/add" element={<AddProduct />} />
                <Route path="products/categoryes" element={<ProductCategories />} />
                <Route path="products/attributes" element={<ProductAttributes />} />
                <Route path="products/brands" element={<ProductBrands />} />

                {/* 404 Page */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </>
    )
}