import React from 'react'

import { ChevronLeftIcon , XMarkIcon , BellAlertIcon} from '@heroicons/react/24/outline'


export default function MessageItem(Data) {
    return (
        <>
            <ul className="flex flex-col">

                {Data.item
                    ? Data.item.map((item) => (
                        <li key={item.text} className={`group/item px-5 py-3 ${Data.bgColor} ${Data.hoverColor} text-gray-500 hover:text-white border-b-slate-300 border-b duration-300`}>
                            <a href="#" className="flex items-cente justify-between gap-3">
                                <BellAlertIcon className='w-5 h-5' />

                                <span className='text-xs'>{item.text}</span>

                                <XMarkIcon className='w-5 h-5 text-red-500 group-hover/item:text-white'></XMarkIcon>
                            </a>
                        </li>
                    ))

                    : <li className="px-5 py-2 text-center border-b-slate-300 border-b "><span>صندق خالی است</span></li>
                }

            </ul>

            <div className="px-5 py-2 text-blue-500 hover:text-white hover:bg-blue-500 duration-300">
                <a href="#" className="flex items-center justify-center gap-0.5">

                    <span className='pt-1 text-sm'>مشاهده پیام ها</span>

                    <ChevronLeftIcon className='w-3 h-3' />

                </a>
            </div>
        </>
    )
}