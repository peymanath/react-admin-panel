import React from 'react'
import Close from '@mui/icons-material/Close'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import HeaderIcon from '../../Components/HeaderIcon'

export default function Iconheader(Data) {
    const listMessage = [
        {
            text: "۵۰٪ تخفیف برای دوره ری اکت",
            link: "/new-message"
        },
        {
            text: "پیام جدید از طرف عباس غلامی",
            link: "/new-message/?messageID=567"
        },
        {
            text: "پیام جدید از طرف مدیر فروش",
            link: "/new-message/?messageID=91"
        },
        {
            text: "پیام جدید از طرف دبیر کل",
            link: "/new-message/?messageID=1678"
        },
    ]

    const removeItem = () => {
        const allIcon = document.querySelectorAll('.IconHeaderItem');

        allIcon.forEach((item) => {

            if (!item.classList.contains('hidden')) {
                item.classList.add('hidden')
            }
        })
    }

    const changeClassIcon = (e) => {

        if (e.target.classList.contains('flex')) return;

        const element = e.target.parentElement.parentElement.parentElement.childNodes;

        if (element[2].classList.contains('hidden')) {

            removeItem()

            element[2].classList.remove('hidden')

        } else {

            removeItem()

            element[2].classList.add('hidden')
        }
    }

    return (
        <>
            <div id='IconHead' className="relative">

                <HeaderIcon click={changeClassIcon}>
                    {Data.children[0]}
                </HeaderIcon>

                <span className={`absolute ${Data.color[0]} text-white rounded-full -top-1 -right-1 p-1 px-1 p1-1.5 text-[0.5rem] leading-none`}>
                    {Data.counter}
                </span>

                <div className={`IconHeaderItem absolute hidden bg-white border-input rounded-md border top-10 left-0 overflow-hidden min-w-[280px] max-w-lg`} >

                    <ul className="flex flex-col">

                        {listMessage && listMessage.map((item) => (
                            <li key={item.text} className={`px-5 py-3 ${Data.color[1]} hover:text-white border-b-slate-300 border-b duration-300`}>
                                <a href="#" className="flex items-cente justify-between gap-3">

                                    {Data.children[1]}


                                    <span className='text-xs'>{item.text}</span>


                                    <Close fontSize="10px"></Close>

                                </a>
                            </li>
                        ))}

                    </ul>

                    <div className={`px-5 py-2 ${Data.color[0]} text-white duration-300`}>
                        <a href="#" className="flex items-center justify-center gap-1">

                            <span>مشاهده پیام ها</span>

                            <ArrowBackIos sx={{ fontSize: 13 }} />

                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
