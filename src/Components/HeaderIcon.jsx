import React from 'react'

export default function HeaderIcon(Icon) {
    return (
        <>
            <div className='flex bg-[#F2F4F6] text-[#616262] border border-input p-0.5 rounded-md cursor-pointer hover:bg-[#dddddd93] duration-300 z-50' onClick={Icon.click}>
                {Icon.children}
            </div>

        </>
    )
}