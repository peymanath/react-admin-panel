import React from 'react'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import Close from '@mui/icons-material/Close'
import NotificationsActive from '@mui/icons-material/NotificationsActive'

export default function MessageItem(Data) {
    return (
        <>
            <ul className="flex flex-col">

                {Data.item
                    ? Data.item.map((item) => (
                        <li key={item.text} className={`group/item px-5 py-3 ${Data.bgColor} ${Data.hoverColor} text-gray-500 hover:text-white border-b-slate-300 border-b duration-300`}>
                            <a href="#" className="flex items-cente justify-between gap-3">
                                <NotificationsActive sx={{ fontSize: 15 }} />

                                <span className='text-xs'>{item.text}</span>

                                <Close className='text-red-500 group-hover/item:text-white' fontSize="10px"></Close>
                            </a>
                        </li>
                    ))

                    : <li className="px-5 py-2 text-center"><span>صندق خالی است</span></li>
                }

            </ul>

            <div className={`px-5 py-2 ${Data.textColor} ${Data.bgColor} ${Data.hoverColor} hover:text-white duration-300`}>
                <a href="#" className="flex items-center justify-center gap-1">

                    <span>مشاهده پیام ها</span>

                    <ArrowBackIos sx={{ fontSize: 13 }} />

                </a>
            </div>
        </>
    )
}