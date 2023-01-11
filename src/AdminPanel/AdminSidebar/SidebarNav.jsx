import React from 'react'

function SidebarNav() {
    return (
        <>
            {/* nav items sidebar */}
            <ul class="py-4 px-5 pl-8">

                {/* <!-- sidebar item 1  --> */}
                <li class="pb-5">
                    <a href="#" class="flex flex-wrap items-center justify-center gap-x-2 text-sm">
                        <svg class="w-6 h-6">
                            <use xlink:href="#product"></use>
                        </svg>
                        <span class="text-menu">افزودن محصولات جدید</span>
                    </a>
                </li>

                {/* <!-- sidebar item 1  --> */}
                <li class="pb-5">
                    <a href="#" class="flex flex-wrap items-center justify-center gap-x-2 text-sm">
                        <svg class="w-6 h-6">
                            <use xlink:href="#product"></use>
                        </svg>
                        <span class="text-menu">محصولات در حال تولید</span>
                    </a>
                </li>

                {/* <!-- sidebar item 1  --> */}
                <li class="pb-5">
                    <a href="#" class="flex flex-wrap items-center justify-center gap-x-2 text-sm">
                        <svg class="w-6 h-6">
                            <use xlink:href="#product"></use>
                        </svg>
                        <span class="text-menu">محصولات جدید در انبار</span>
                    </a>
                </li>

            </ul>
        </>
    )
}

export default SidebarNav