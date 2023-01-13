import React, {useEffect} from 'react'

export default function AddPost() {

    const Title = "افزودن نوشته"
    useEffect(() => { document.title = Title }, [])

    return (
        <>
            <h1>{Title}</h1>
        </>
    )
}