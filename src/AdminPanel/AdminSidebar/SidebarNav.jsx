import React, { useState, useRef, useEffect } from 'react'
import Home from '@mui/icons-material/Home'
import Inventory2 from '@mui/icons-material/Inventory2'
import RadioButtonChecked from '@mui/icons-material/RadioButtonChecked'
import LibraryBooks from '@mui/icons-material/LibraryBooks'
import NavbarLink from '../../Components/NavbarLink'

const iconSize = 22;
const iconSizeChild = 12;

function SidebarNav(Data) {

    const navLinks = [
        {
            name: "خانه",
            link: "/",
            icon: <Home sx={{ fontSize: iconSize }} />,
            children: false,
            childrens: []
        },
        {
            name: "محصولات",
            link: "/products",
            icon: <Inventory2 sx={{ fontSize: iconSize }} />,
            children: true,
            childrens: [
                {
                    name: "لیست محصولات",
                    link: "/products",
                    icon: <RadioButtonChecked sx={{ fontSize: iconSizeChild }} />,
                },
                {
                    name: "افزودن محصولات",
                    link: "/products/add",
                    icon: <RadioButtonChecked sx={{ fontSize: iconSizeChild }} />,
                },
                {
                    name: "دسته‌بندی ها",
                    link: "/products/categoryes",
                    icon: <RadioButtonChecked sx={{ fontSize: iconSizeChild }} />,
                },
                {
                    name: "ویژگی ها",
                    link: "/products/attributes",
                    icon: <RadioButtonChecked sx={{ fontSize: iconSizeChild }} />,
                },
                {
                    name: "برند ها",
                    link: "/products/brands",
                    icon: <RadioButtonChecked sx={{ fontSize: iconSizeChild }} />,
                },
            ]
        },
        {
            name: "وبلاگ",
            link: "/blog",
            icon: <LibraryBooks sx={{ fontSize: iconSize }} />,
            children: true,
            childrens: [
                {
                    name: "وبلاگ",
                    link: "/blog",
                    icon: <RadioButtonChecked sx={{ fontSize: iconSizeChild }} />,
                },
                {
                    name: "افزودن نوشته",
                    link: "/blog/add",
                    icon: <RadioButtonChecked sx={{ fontSize: iconSizeChild }} />,
                },
                {
                    name: "دسته‌بندی ها",
                    link: "/blog/categoryes",
                    icon: <RadioButtonChecked sx={{ fontSize: iconSizeChild }} />,
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