import { Link } from 'react-router-dom'
import React from 'react'

export const ProfileOptionsButton = ( { link, children } : { link: string, children: React.ReactNode }) => {
    return (
        <Link to={link} className='z-[1001] h-max opacity-50 text-lg sm:ml-0 ml-[10px] transition duration-400 hover:opacity-100 flex items-center gap-[10px] cursor-pointer'> { children } </Link>
    )
}