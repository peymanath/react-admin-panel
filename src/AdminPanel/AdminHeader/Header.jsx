import React from 'react'
import { ChatBubbleLeftRightIcon, BellAlertIcon, Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import SearchForm from '../../Components/SearchForm';
import ProfileImage from '../../Components/ProfileImage';
import IconBackground from '../../Components/IconBackground';
import MessageItem from '../../Components/MessageItem'



export default function Header() {

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

    return (
        <>
            <header className="bg-white border-b border-[#a1a1a13e] shadow-md">

                <div className="flex items-center justify-between py-3 px-5">

                    <div className="flex items-center md:hidden flex-wrap gap-x-5">

                        <div className="btn-menu-mobile flex bg-[#F2F4F6] text-[#616262] border border-input p-2 rounded-md cursor-pointer">
                            <Bars3BottomRightIcon className='w-6 h-6' />
                        </div>

                        <ProfileImage imgClassName="w-10 h-10 rounded-md" imgAlt="عکس پروفایل" />

                    </div>

                    <SearchForm />

                    <div className="flex flex-wrap gap-3">

                        <IconBackground clickable={true} counter={(10)} bgColor={"bg-red-500"}>

                            <BellAlertIcon className='w-6 h-6' />

                            <MessageItem item={listMessage} textColor={"text-red-500"} bgColor={"bg-white"} hoverColor={"hover:bg-red-500"} />

                        </IconBackground>

                        <IconBackground clickable={true} counter={(90)} bgColor={"bg-green-500"}>

                            <BellAlertIcon className='w-6 h-6' />

                            <MessageItem textColor={"text-green-500"} bgColor={"bg-white"} hoverColor={"hover:bg-green-500"} />

                        </IconBackground>

                        <IconBackground clickable={false} bgColor={["bg-yellow-500"]}>
                            <ChatBubbleLeftRightIcon className='w-6 h-6' />
                        </IconBackground>

                    </div>
                </div>
            </header>
        </>
    )
}

