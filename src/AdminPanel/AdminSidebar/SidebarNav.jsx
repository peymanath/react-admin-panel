import React, { useState, useRef, useEffect } from 'react'
import Inventory2 from '@mui/icons-material/Inventory2'
import NavbarLink from '../../Components/NavbarLink'


function SidebarNav(Data) {

    const navLinks = [
        {
            name: "خانه",
            link: "/",
            icon: <Inventory2 />,
            children: false,
            childrens: []
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
        {
            name: "وبلاگ",
            link: "/blog",
            icon: <Inventory2 />,
            children: true,
            childrens: [
                {
                    name: "وبلاگ",
                    link: "/blog",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
                {
                    name: "افزودن نوشته",
                    link: "/blog/add",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
                {
                    name: "دسته‌بندی ها",
                    link: "/blog/categoryes",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
            ]
        },
        {
            name: "وبلاگ",
            link: "/blog",
            icon: <Inventory2 />,
            children: true,
            childrens: [
                {
                    name: "وبلاگ",
                    link: "/blog",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
                {
                    name: "افزودن نوشته",
                    link: "/blog/add",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
                {
                    name: "دسته‌بندی ها",
                    link: "/blog/categoryes",
                    icon: <Inventory2 sx={{ fontSize: 15 }} />,
                },
            ]
        },
    ]

    return (
        <>
            <ul className={`flex flex-col gap-y-3 p-5`}>

                {
                    navLinks.map((item, index) => (
                        <NavbarLink key={index} navIndex={index} navName={item.name} navLink={item.link} navIcon={item.icon} navChildren={item.children} navChildrens={item.childrens} navMenuActive={Data.menuActive} />
                    ))
                }

            </ul>
        </>
    )
}

export default SidebarNav