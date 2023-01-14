export const SingleHeaderPage = (Data) => {
    return (
        <>

            <header class="flex flex-wrap gap-4 items-center justify-center sm:justify-between bg-white py-2 px-5 text-xs md:text-sm lg:text">

                <div class="hidden sm:flex sm:flex-wrap sm:gap-1">
                    {Array.isArray(Data.children) ? Data.children[0] : Data.children}
                </div>

                {Data.children[1] &&
                    <div class="flex flex-wrap gap-1 w-full justify-between sm:w-auto">
                        {Data.children[1]}
                    </div>
                }

            </header>

        </>
    )
}