import React from 'react'
import ProfileImageIcon from '../Images/profileImage.png'


export default function ProfileImage(Data) {
    return (
        <>

            <img src={ProfileImageIcon} alt={Data.imgAlt} className={Data.imgClassName} />

        </>
    )
}