import React from 'react'

export default function HeaderIcon(Icon) {
    
    return (
        <>
            <div className='flex bg-gray-100 text-gray-600 border border-gray-200 p-1 rounded-md cursor-pointer hover:text-gray-500 duration-300 z-50' onClick={Icon.click}>
                {Icon.children}
            </div>

        </>
    )
}