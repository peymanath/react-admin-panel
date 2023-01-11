import React, { useState } from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import Inventory2 from '@mui/icons-material/Inventory2'


function SidebarNav(Data) {

    const [cilhdMenu, setCilhdMenu] = useState(false);

    const navLinks = [
        {
            name: "خانه",
            link: "/",
            icon: <Inventory2 />,
            childeren: false,
        },
        {
            name: "محصولات",
            link: "/products",
            icon: <Inventory2 />,
            children: true,
            childrens: [
                {
                    name: "لیست محصولات",
                    link: "/products",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
                {
                    name: "افزودن محصولات",
                    link: "/products/add",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
                {
                    name: "دسته‌بندی ها",
                    link: "/products/categoryes",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
                {
                    name: "ویژگی ها",
                    link: "/products/attributes",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
                {
                    name: "برند ها",
                    link: "/products/brands",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
            ]
        },
    ]

    return (
        <>
            <ul className="py-4 px-5 pl-8">

                {
                    navLinks.map(item => (
                        <li key={item.name} className="pb-5">
                            {
                                item.children
                                    ?
                                    <div onClick={() => setCilhdMenu(!cilhdMenu)} className="cursor-pointer">
                                        {item.icon}
                                        <span className={Data.menuActive ? 'hidden' : ''}> {item.name}</span>
                                    </div>
                                    :
                                    <NavLink to={item.link} className={`group/product flex flex-wrap items-center ${Data.menuActive ? 'justify-center' : '' } gap-x-2 text-sm`}>
                                        {item.icon}
                                        <span className={Data.menuActive ? 'hidden' : ''} >{item.name}</span>
                                    </NavLink>
                            }
                            {
                                item.children &&
                                <ul className={`${cilhdMenu ? "" : "hidden"} pt-5 mr-2`}>
                                    {item.childrens &&
                                        item.childrens.map(item => (
                                            <li key={item.name} className="pb-5">
                                                <NavLink to={item.link} className={`flex flex-wrap items-center ${Data.menuActive ? 'justify-center' : ''} gap-x-2 text-sm`}>
                                                    {item.icon}
                                                    <span className={Data.menuActive ? 'hidden' : ''} >{item.name}</span>
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                        </li>
                    ))
                }

            </ul>
        </>
    )
}

export default SidebarNav