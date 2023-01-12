import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ChevronLeft from '@mui/icons-material/ChevronLeft'



export default function NavbarLink(Data) {

    const [cilhdMenu, setCilhdMenu] = useState(false)

    let refContainer = useRef()

    let [height, setHeight] = useState(0);

    useEffect(() => {
        if (refContainer.current) {

            setHeight(refContainer.current.childNodes.length * 25 + 10)
            console.log(refContainer.current.childNodes.length * 25)
        }
    }, []);


    return (

        <li key={Data.navIndex} className="">
            {
                Data.navChildren
                    ?
                    <div onClick={() => setCilhdMenu(!cilhdMenu)} className={`flex cursor-pointer items-center ${Data.navMenuActive ? 'justify-center' : ''} gap-x-2 text-sm`}>
                        {Data.navIcon}

                        <div className={Data.navMenuActive ? 'hidden' : 'flex items-center'}>
                            <span className='text-sm'> {Data.navName}</span>
                            <span className={`${cilhdMenu ? "-rotate-90" : "-rotate-0"} duration-300 transition-all`}>
                                <ChevronLeft sx={{ fontSize: 16 }} />
                            </span>
                        </div>

                    </div>
                    :
                    <NavLink to={Data.navLink} className={`group/product flex flex-wrap items-center ${Data.navMenuActive ? 'justify-center' : ''} gap-x-2 text-sm`}>
                        {Data.navIcon}
                        <span className={`text-sm ${Data.navMenuActive ? 'hidden' : ''}`} >{Data.navName}</span>
                    </NavLink>
            }
            {
                Data.navChildren &&
                <ul className={cilhdMenu ? "flex flex-col justify-between fadeIn m-4 ml-0" : `fadeOut`} style={cilhdMenu ? { height: height } : { height: 0 }} ref={refContainer} >
                    {Data.navChildrens &&
                        Data.navChildrens.map((item, index) => (
                            <li key={index} className="">
                                <NavLink to={item.link} className={`flex flex-wrap items-center ${Data.navMenuActive ? 'justify-center' : ''} gap-x-2 text-sm`}>
                                    {item.icon}
                                    <span className={`text-xs ${Data.navMenuActive ? 'hidden' : ''}`} >{item.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            }
        </li>
    )
}