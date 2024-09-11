export const UserAvatar = ({ name }: { name: string }) => {
    return(
        <div className='w-[40px] h-[40px] bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md flex items-center justify-center rounded-full'>
            <p className='text-[#fff]'>{name[0]}</p>
        </div>
    )
}