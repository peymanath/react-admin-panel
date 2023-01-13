import React from 'react'
import ProfileImageIcon from '../Images/profileImage.png'
import { Link } from 'react-router-dom'


export default function ProfileImage(Data) {
    return (
        <>
            <Link key="Panel" to="/" className="bg-gray text-white flex rounded-md">
                <img src={ProfileImageIcon} alt={Data.imgAlt} className={Data.imgClassName} />
            </Link>
        </>
    )
}