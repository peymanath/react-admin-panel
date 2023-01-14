import React, { useEffect } from 'react'
import { Button } from '../../../Components/Button'
import { SingleHeaderPage } from '../../../Components/SingleHeaderPage'

export default function AddProduct() {

  const Title = "افزودن محصول جدید"
  useEffect(() => { document.title = Title }, [])

  const SubmitForm = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={SubmitForm} >

        {/* Header Page */}
        <SingleHeaderPage>

          <h1>{Title}</h1>

          <>
            <Button text="پیش نویس" name="submit" color={'Red'} border={false} />

            <Button text="تایید و انتشار" name="submit" color={'Green'} border={true}/>
          </>

        </SingleHeaderPage>

        <div className='p-5'>

        </div>

      </form>
    </>
  )
}