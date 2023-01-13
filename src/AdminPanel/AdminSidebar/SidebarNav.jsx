import React from 'react'
import NavbarLink from '../../Components/NavbarLink'
import { HomeIcon, ArchiveBoxIcon, PencilSquareIcon, StopCircleIcon } from '@heroicons/react/24/outline'

const iconSize = 'w-5 h-5 text-wite';
const iconSizeChild = 'w-2.5 h-2.5 text-wite';

function SidebarNav(Data) {

    const navLinks = [
        {
            name: "خانه",
            link: "/",
            icon: <HomeIcon className={iconSize} />,
            children: false,
            childrens: []
        },
        {
            name: "محصولات",
            link: "/products",
            icon: <ArchiveBoxIcon className={iconSize} />,
            children: true,
            childrens: [
                {
                    name: "لیست محصولات",
                    link: "/products",
                    icon: <StopCircleIcon className={iconSizeChild} />,
                },
                {
                    name: "افزودن محصولات",
                    link: "/products/add",
                    icon: <StopCircleIcon className={iconSizeChild} />,
                },
                {
                    name: "دسته‌بندی ها",
                    link: "/products/categoryes",
                    icon: <StopCircleIcon className={iconSizeChild} />,
                },
                {
                    name: "ویژگی ها",
                    link: "/products/attributes",
                    icon: <StopCircleIcon className={iconSizeChild} />,
                },
                {
                    name: "برند ها",
                    link: "/products/brands",
                    icon: <StopCircleIcon className={iconSizeChild} />,
                },
            ]
        },
        {
            name: "وبلاگ",
            link: "/blog",
            icon: <PencilSquareIcon className={iconSize} />,
            children: true,
            childrens: [
                {
                    name: "وبلاگ",
                    link: "/blog",
                    icon: <StopCircleIcon className={iconSizeChild} />,
                },
                {
                    name: "افزودن نوشته",
                    link: "/blog/add",
                    icon: <StopCircleIcon className={iconSizeChild} />,
                },
                {
                    name: "دسته‌بندی ها",
                    link: "/blog/categoryes",
                    icon: <StopCircleIcon className={iconSizeChild} />,
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