import React, { useEffect } from 'react'
import { ButtonRedBorder, ButtonGreenBorder, ButtonGreen, ButtonRed } from '../../../Components/Button'
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
            <ButtonRed text="پیش نویس" name="submit" />
            <ButtonGreenBorder text="تایید و انتشار" name="submit" />
          </>

        </SingleHeaderPage>

        <div className='p-5'>

        </div>

      </form>
    </>
  )
}