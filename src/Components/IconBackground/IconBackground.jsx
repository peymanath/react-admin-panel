import React from 'react'
import IconBackgroundSvg from './IconBackgroundSvg'

export default function Iconheader(Data) {

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
                {
                    Data.clickable
                        ? <IconBackgroundSvg click={changeClassIcon}>
                            {Array.isArray(Data.children) ? Data.children[0] : Data.children}
                        </IconBackgroundSvg>

                        : <IconBackgroundSvg>
                            {Array.isArray(Data.children) ? Data.children[0] : Data.children}
                        </IconBackgroundSvg>
                }


                {Data.counter &&
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
