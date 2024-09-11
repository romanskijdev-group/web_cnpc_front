import { MouseEventHandler } from 'react'

export const Button = ({ title, onClick, className } : { title: string, onClick?: MouseEventHandler<HTMLButtonElement> | undefined, className?: string}) => {
    return (
        <button onClick={onClick}
                className={`bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg ${className}`}>{title}</button>
    )
}