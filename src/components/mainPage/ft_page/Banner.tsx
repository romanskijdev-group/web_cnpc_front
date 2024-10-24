import { FC } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { IoCube } from 'react-icons/io5'
import { FaLongArrowAltDown } from 'react-icons/fa'
import gif from '../../../assets/project_creating.gif'

export const Banner: FC = () => {
    return(
        <div data-aos='fade-up' className='mt-5 bg-white border dark:border-gray-500 rounded-lg px-5 py-10 dark:bg-gray-700 w-[90%] dark:text-gray-200 sm:max-w-screen-xl mx-auto z-50 flex flex-col gap-[30px]'>
            <h1 className='text-2xl sm:text-3xl text-center sm:w-[50%] mx-auto font-bold'>Создание квестов гораздо быстрее с функциями QuestHolder.</h1>
            <p className='opacity-60 text-center sm:w-[70%] mx-auto text-base'>Разрабатывайте собственные квест-проекты с помощью инструмента с открытым исходным кодом, содержащий множество полезных инструментов, таких как работа с диалогами, квестами и многое другое.</p>
            <div className='w-max mx-auto flex flex-col sm:flex-row gap-[30px]'>
                <NavLink data-aos='fade-in' to='/dashboard/home'
                         className='flex items-center gap-[20px] text-lg border bg-gray-100 dark:border-gray-500 dark:bg-gray-700 py-1.5 px-4 rounded-lg shadow-sm cursor-pointer hover:bg-gradient-to-br hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:text-white'>
                    <FaArrowRightLong /> Начать работу</NavLink>
                <a data-aos='fade-in' href='#about'
                         className='flex items-center gap-[20px] text-lg border bg-gray-100 dark:border-gray-500 dark:bg-gray-700 py-1.5 px-4 rounded-lg shadow-sm cursor-pointer hover:text-yellow-600 dark:hover:text-yellow-400 duration-300'>
                    <IoCube /> Что это за проект?</a>
            </div>
            <div className='mx-auto items-center justify-center flex w-max rounded-lg'>
                <img src={gif} className='w-[90%] h-[22vh] md:w-[100%] md:h-[25vh] rounded-lg' alt='' />
            </div>
            <div className='flex flex-row justify-between gap-[10px] items-center opacity-60 duration-300 hover:opacity-100 w-max mx-auto rounded-lg py-1.5 px-2 cursor-pointer'>
                <FaLongArrowAltDown className='animate-bounce text-sm text-yellow-600'/>
                <a href='#capabilities'>Узнать больше</a>
                <FaLongArrowAltDown className='animate-bounce text-sm text-yellow-600'/>
            </div>
        </div>
    )
}