export const ButtonRed = (Data) => {
    return (
        <>
            <button type={Data.type} name={Data.name} class="text-white bg-c-red border-c-red border rounded-md py-2 px-4 duration-300 hover:bg-white hover:text-c-red">
                {Data.text}
            </button>
        </>
    )
}
export const ButtonRedBorder = (Data) => {
    return (
        <>
            <button type={Data.type} name={Data.name} class="text-c-red bg-white border-c-red border rounded-md py-2 px-4 duration-300 hover:bg-c-red hover:text-white">
                {Data.text}
            </button>
        </>
    )
}
export const ButtonGreen = (Data) => {
    return (
        <>
            <button type={Data.type} name={Data.name} class="text-white bg-c-green border-c-green border rounded-md py-2 px-4 duration-300 hover:bg-white hover:text-c-green">
                {Data.text}
            </button>
        </>
    )
}
export const ButtonGreenBorder = (Data) => {
    return (
        <>
            <button type={Data.type} name={Data.name} class="text-c-green bg-white border-c-green border rounded-md py-2 px-4 duration-300 hover:bg-c-green hover:text-white">
                {Data.text}
            </button>
        </>
    )
}
