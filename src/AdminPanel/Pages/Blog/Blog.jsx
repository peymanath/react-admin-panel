import React, {useEffect} from 'react'

export default function Blog() {

    const Title = "وبلاگ"
    useEffect(() => { document.title = Title }, [])

    return (
        <>
            <h1>{Title}</h1>
        </>
    )
}
