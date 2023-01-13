import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function SearchResult() {

    const Title = "سرچ محصولات و مقالات"
    useEffect(() => { document.title = Title }, [])

    const location = useLocation()
    const params = new URLSearchParams(location.search)

    return (
        <div className='p-10'>
            <h1>{Title}</h1>
            <span>عبارت سرچ شده: </span>
            <span>{params.get("search")}</span>
        </div>
    )
}