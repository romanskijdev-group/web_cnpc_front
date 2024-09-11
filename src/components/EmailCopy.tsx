import React from 'react'
import { FaCopy } from 'react-icons/fa'
import { IoSparkles } from 'react-icons/io5'

const Mail = ( { copy } : { copy: boolean } ) => {
    return (
        <p className={`flex dark:text-white items-center gap-2 text-sm absolute -right-[80%] -bottom-[1px] border pt-2 pb-1 px-1 border-l-0 rounded-r-md ${copy ? 'border-green-400' : ''}`}>
            { !copy ? <FaCopy className='animate-bounce'/> : <IoSparkles /> }
            { copy ? 'Скопировано' : 'Скопировать' }
        </p>
    )
}

export const EmailCopy = () => {
    const [hover, setHover] = React.useState(false)
    const [copy, setCopy] = React.useState(false)
    const [mail] = React.useState('hello@noove.ru')

    return (
        <p onMouseEnter={() => {
            setHover(true)
        }} onMouseLeave={() => {
            setHover(false)
        }} onClick={() => {
            navigator.clipboard.writeText(mail).then(() => {
                setCopy(true)
            })
        }} className={`cursor-pointer pt-2 pb-1 px-3 border-b w-max relative ${copy ? 'border-green-400' : ''}`}>
            {
                hover ? (
                    <Mail copy={copy}></Mail>
                ) : (
                    <p></p>
                )
            }
            hello@quests.ru
        </p>
    )
}