import { FaSortAmountDownAlt } from 'react-icons/fa'
import React from 'react'

export const TableContainer = ( { title, children } : { title: string, children: React.ReactNode } ) => {
    return (
        <div className='border py-4 w-full rounded-lg px-2 flex flex-col gap-[20px]'>
            <p className='flex items-center gap-[10px]'> <FaSortAmountDownAlt className='text-yellow-800'/> {title}:</p>
            <div className=' flex flex-col gap-[10px] border py-2 px-2 rounded-lg'>
                { children }
            </div>
        </div>
    )
}