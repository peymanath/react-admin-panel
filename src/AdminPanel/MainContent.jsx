import React from 'react'
import Home from './Pages/Home/Home'
import Products from './Pages/Product/Products'
import AddProduct from './Pages/Product/AddProduct'
import ProductCategories from './Pages/Product/ProductCategories'
import ProductAttributes from './Pages/Product/ProductAttributes'
import ProductBrands from './Pages/Product/ProductBrands'
import Blog from './Pages/Blog/Blog'
import AddPost from './Pages/Blog/AddPost'
import PostCategoryes from './Pages/Blog/PostCategoryes'
import SearchResult from './Pages/Search/SearchResult'
import Messages from './Pages/Messages'
import NotFound from './Pages/NotFound'
import { Routes, Route } from 'react-router-dom'

export default function MainContent() {
    return (
        <>
            <Routes>

                {/* Home Page */}
                <Route path="/" element={<Home />} />

                {/* Message Pages */}
                <Route path="messages" element={<Messages />} />

                {/* Product Pages */}
                <Route path="products" element={<Products />} />
                <Route path="products/add" element={<AddProduct />} />
                <Route path="products/categoryes" element={<ProductCategories />} />
                <Route path="products/attributes" element={<ProductAttributes />} />
                <Route path="products/brands" element={<ProductBrands />} />

                {/* Blog Pages */}
                <Route path="blog" element={<Blog />} />
                <Route path="blog/add" element={<AddPost />} />
                <Route path="blog/categoryes" element={<PostCategoryes />} />

                {/* Search Page */}
                <Route path="/search" element={<SearchResult />} />

                {/* 404 Page */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </>
    )
}