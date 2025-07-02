
export default function CardComponent2({type}) {
    return (
        <div className='w-54 h-68 py-3 px-3 hover:shadow-2xl shadow-gray-400 transition duration-500 ease-in-out cursor-pointer'>
            <img src={type.image}  alt='img' className='w-full h-[78%] object-cover'/>
            <p className="text-gray-800 font-semibold text-center text-sm pt-2">{type.name}</p>
            <p className="text-gray-800 text-center text-sm">{type.description}</p>
        </div>
    )
}