
export default function CardComponent({drug}) {
    return (
        <div className='w-48 h-60 py-3 px-3 hover:shadow-2xl shadow-gray-400 transition duration-500 ease-in-out cursor-pointer'>
            <img src={drug?.image} alt='img' className='w-full h-[75%] object-cover'/>
            <p className="text-gray-800 text-[14px] pt-2 hover:text-blue-500 transition ease-in-out duration-300 cursor-pointer">{drug?.name}</p>
            <p className="text-gray-800 font-semibold text-[17px]">{drug?.price}</p>
        </div>
    )
}