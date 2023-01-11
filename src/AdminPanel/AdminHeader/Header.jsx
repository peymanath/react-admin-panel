import React from 'react'
import Menu from '@mui/icons-material/Menu';
import SearchForm from '../../Components/SearchForm';
import ProfileImage from '../../Components/ProfileImage';
import IconBackground from '../../Components/IconBackground/IconBackground';
import NotificationsActive from '@mui/icons-material/NotificationsActive'
import MessageItem from '../../Components/MessageItem'
import Forum from '@mui/icons-material/Forum'

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
        <div className="flex-1 w-full md:w-8/12 lg:w-4/6">

            <header className="bg-white border-b border-[#a1a1a13e] shadow-md">

                <div className="flex items-center justify-between py-3 px-5">

                    <div className="flex items-center md:hidden flex-wrap gap-x-5">

                        <div className="btn-menu-mobile flex bg-[#F2F4F6] text-[#616262] border border-input p-2 rounded-md cursor-pointer">
                            <Menu></Menu>
                        </div>

                        <ProfileImage />

                    </div>

                    <SearchForm />

                    <div className="flex flex-wrap gap-3">

                        <IconBackground clickable={true} counter={(10)} bgColor={"bg-red-500"}>

                            <NotificationsActive sx={{fontSize:25}} />

                            <MessageItem item={listMessage} textColor={"text-red-500"} bgColor={"bg-white"} hoverColor={"hover:bg-red-500"} />

                        </IconBackground>

                        <IconBackground clickable={false} bgColor={["bg-yellow-500"]}>
                            <Forum sx={{fontSize:25}} />
                        </IconBackground>

                    </div>

                </div>

            </header>


        </div>
    )
}

