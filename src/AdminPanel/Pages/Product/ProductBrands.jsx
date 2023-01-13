import React, {useEffect} from 'react'

export default function ProductBrands() {
    
    const Title = "برند محصولات"
    useEffect(() => { document.title = Title }, [])

    return (
        <>
            <h1>{Title}</h1>
        </>
    )
}