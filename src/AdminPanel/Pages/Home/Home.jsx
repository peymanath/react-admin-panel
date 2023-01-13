import React, { useEffect } from 'react'

export default function Home() {

    const Title = "پنل کاربری"
    useEffect(() => { document.title = Title }, [])

    return (
        <>
            <h1>{Title}</h1>
        </>
    )
}