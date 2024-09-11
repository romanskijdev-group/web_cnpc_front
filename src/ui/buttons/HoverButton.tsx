import { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'

export const HoverButton = ({ title, onClick, link } : { title: string, onClick?: MouseEventHandler<HTMLButtonElement> | undefined, link: string }) => {
    return(
        <>
            {link ? (
                <Link to={link} className='border text-center border-yellow-700 text-[#1D1717] shadow-md px-8 py-2 rounded-lg'>{title}</Link>
            ) : (
                <button onClick={onClick} className='border border-yellow-700 text-[#1D1717] shadow-md px-8 py-2 rounded-lg'>{title}</button>
            )}
        </>
    )
}