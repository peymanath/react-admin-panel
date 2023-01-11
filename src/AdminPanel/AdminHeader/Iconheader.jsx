import React, { useState } from 'react'
import Close from '@mui/icons-material/Close'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'

export default function Iconheader(Data) {
    const listMessage = [
        {
            test: "۵۰٪ تخفیف برای دوره ری اکت",
            link: "/new-message"
        },
        {
            test: "پیام جدید از طرف عباس غلامی",
            link: "/new-message/?messageID=567"
        },
        {
            test: "پیام جدید از طرف مدیر فروش",
            link: "/new-message/?messageID=91"
        },
        {
            test: "پیام جدید از طرف دبیر کل",
            link: "/new-message/?messageID=1678"
        },
    ]

    const [changeClass, setChangeClass] = useState('hidden');
    const changeClassIcon = () => {
        setChangeClass((changeClass == 'hidden') ? '' : 'hidden')
    }
    return (
        <>
            <div className="relative">

                <div className='flex bg-[#F2F4F6] text-[#616262] border border-input p-1 rounded-md cursor-pointer hover:bg-[#dddddd93] duration-300 z-50' onClick={changeClassIcon}>
                    {Data.children}
                </div>

                <span className={`absolute ${Data.colorCounter} text-white rounded-full -top-1 -right-1 p-1 px-1 p1-1.5 text-[0.5rem] leading-none`}>
                    {Data.counter}
                </span>

                <div className={`absolute ${changeClass} bg-white border-input rounded-md border top-10 left-0 overflow-hidden min-w-[280px] max-w-lg`} >

                    <ul className="flex flex-col">

                        {
                            listMessage.map((item) => {
                                <li className="px-5 py-3 hover:bg-red-500 hover:text-white border-b-slate-300 border-b duration-300">
                                    <a href="#" className="flex items-cente justify-between gap-3">

                                        {Data.children}


                                        <span>یک پیام جدید دارید</span>

                                        <Close></Close>

                                    </a>
                                </li>
                            })
                        }

                    </ul>

                    <div className="px-5 py-2 text-red-500 hover:bg-red-500 hover:text-white duration-300">
                        <a href="#" className="flex items-center justify-center gap-3">

                            <span>مشاهده پیام ها</span>

                            <ArrowBackIos></ArrowBackIos>

                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
