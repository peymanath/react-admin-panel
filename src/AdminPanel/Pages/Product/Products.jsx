import React , {useEffect} from 'react'

export default function Products() {

    const Title = "لیست محصولات"
    useEffect(() => { document.title = Title }, [])

    return (
        <>
            <h1>{Title}</h1>
        </>
    )
}