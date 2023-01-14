export const Button = (Data) => {

    let Color;

    if (Data.color == "Red") 
        Color = Data.border 
        ? 'text-white hover:text-c-red bg-c-red hover:bg-white border-c-red' 
        : 'text-c-red hover:text-white bg-white hover:bg-c-red border-c-red'
    
    if (Data.color == "Green") 
        Color = Data.border 
        ? 'text-white hover:text-c-green bg-c-green hover:bg-white border-c-green' 
        : 'text-c-green hover:text-white bg-white hover:bg-c-green border-c-green'

    return (
        <button type={Data.type} name={Data.name} className={`${Color} border rounded-md py-2 px-4 duration-300`}>{Data.text}</button>
    )
}