import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useNavigate , useLocation} from 'react-router-dom'

export default function SearchForm() {

    
    const [dataSearch, setDataSearch] = useState("")

    const goTo = useNavigate()

    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const goToSearch = (e) => {
        
        goTo('/search?q=' + dataSearch)
        setDataSearch(e.target.value)

    }

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault() }} action='/search' className="hidden md:flex relative bg-[#F2F4F6] py-1 rounded-md border border-input text-[#616262]">

                <input onChange={goToSearch} type="text" name="q" placeholder="جستجو" className="bg-transparent w-full h-full ml-7 pr-4" />

                <button className="absolute top-1/2 -translate-y-1/2 left-2">
                    <MagnifyingGlassIcon className='w-5 h-5' />
                </button>

            </form>
        </>
    )
}