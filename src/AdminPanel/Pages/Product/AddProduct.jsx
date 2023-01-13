import React, {useEffect} from 'react'

export default function AddProduct() {

  const Title = "افزودن محصول جدید"
  useEffect(() => { document.title = Title }, [])

  return (
    <>
        <h1>{Title}</h1>
    </>
  )
}