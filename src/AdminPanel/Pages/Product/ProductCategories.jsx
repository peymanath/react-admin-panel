import React , {useEffect} from 'react'

export default function ProductCategories() {

  const Title = "دسته بندی ها"
  useEffect(() => { document.title = Title }, [])

  return (
    <div>{Title}</div>
  )
}