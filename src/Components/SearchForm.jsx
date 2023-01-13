import React from 'react'
import Search from '@mui/icons-material/Search';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchForm() {

    const goToSearch = () => {

    }

    return (
        <>
            <form onSubmit={goToSearch} action='/search' className="hidden md:flex relative bg-[#F2F4F6] py-1 rounded-md border border-input text-[#616262]">

                <input type="text" name="search" placeholder="جستجو" className="bg-transparent w-full h-full ml-7 pr-4" />

                <button className="absolute top-1/2 -translate-y-1/2 left-2">
                    <MagnifyingGlassIcon className='w-5 h-5' />
                </button>

            </form>
        </>
    )
}