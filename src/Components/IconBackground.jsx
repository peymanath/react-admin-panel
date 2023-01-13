import React from 'react'

export default function Iconheader(Data) {

    const changeClassIcon = (e) => {

        // Receive parent elements
        const element = e.target.parentElement.parentElement.childNodes;

        // Checking the point that the user clicked
        if (element[2]) {
            if (element[2].classList.contains('IconHead')) return
        }
        else return

        // Remove "Hidden" class for all Icons
        const allIcon = document.querySelectorAll('.IconHeaderItem');
        allIcon.forEach((item) => (!item.classList.contains('hidden')) ? item.classList.add('hidden') : null)

        // show & hide items
        if (element[2].classList.contains('hidden')) {
            element[2].classList.remove('hidden')
        } else {
            element[2].classList.add('hidden')
        }
    }

    return (
        <>
            <div id='IconHead' className="IconHead relative" >

                <div className='IconBackgroundSvg flex bg-gray-100 text-gray-600 border border-gray-200 p-1.5 rounded-md cursor-pointer hover:text-gray-500 duration-300 z-50' onClick={(Data.clickable) ? changeClassIcon : null}>
                    {Array.isArray(Data.children) ? Data.children[0] : Data.children}
                </div>

                {
                    Data.counter &&
                    <span className={`absolute ${Data.bgColor} text-white rounded-full -top-1 -right-1 p-1 px-1 p1-1.5 text-[0.5rem] leading-none`}>
                        {Data.counter}
                    </span>
                }

                {
                    Data.children[1] &&
                    <div className={`IconHeaderItem absolute hidden bg-white border-input rounded-md border top-10 left-0 overflow-hidden min-w-[280px] max-w-lg`} >

                        {Data.children[1]}

                    </div>
                }
            </div>
        </>
    )
}
