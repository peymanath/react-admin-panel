import React from 'react'
import Search from '@mui/icons-material/Search';

export default function SearchForm() {
    return (
        <>
            <form action='/search' className="hidden md:flex relative bg-[#F2F4F6] py-1 rounded-md border border-input text-[#616262]">

                <input type="text" name="search" placeholder="جستجو" className="bg-transparent w-full h-full ml-7 pr-4" />

                <button className="absolute top-1/2 -translate-y-1/2 left-2">
                    <Search></Search>
                </button>

            </form>
        </>
    )
}