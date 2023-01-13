import React , {useEffect}from 'react'

export default function ProductAttributes() {

    const Title = "ویژگی محصولات"
    useEffect(() => { document.title = Title }, [])

    return (
        <>
            <h1>{Title}</h1>
        </>
    )
}