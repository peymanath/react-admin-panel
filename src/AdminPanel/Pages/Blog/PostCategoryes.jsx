import React , {useEffect}from 'react'

export default function PostCategoryes() {

  const Title = "دسته بندی محصولات"
  useEffect(() => { document.title = Title }, [])

  return (
    <>
      <h1>{Title}</h1>
    </>
  )
}