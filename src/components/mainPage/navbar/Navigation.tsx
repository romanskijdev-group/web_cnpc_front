import React from 'react'
import { BurgerMenu } from '../../../ui/buttons/BurgerMenu.tsx'
import { NavMenu } from '../../../ui/navbar/NavMenu.tsx'
import { NavItem } from '../../../ui/navbar/NavItem.tsx'
import 'aos/dist/aos.css'
import { SelectLanguage } from './SelectLanguage.tsx'
import { NavLink } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import { ThemeChanger } from './ThemeChanger.tsx'

export const Navigation: React.FC = () => {
    return(
        <div className='z-50'>
            <nav className='bg-black border-gray-200 px-2 sm:py-1.5'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <a href='' className='flex items-center space-x-3 rtl:space-x-reverse'
                       data-aos='fade-right'>
                        <p
                            className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>QuestHolder</p>
                    </a>
                    <NavMenu aos='fade-in'>
                        <NavItem link='#' title={'Главная'} />
                        <NavItem link='#' title={'О проекте'} />
                        <NavItem link='#' title={'Возможности'} />
                        <NavItem link='#' title={'Контакты'} />
                    </NavMenu>
                    <BurgerMenu></BurgerMenu>
                    <NavLink data-aos='fade-in' to='/dashboard/home'
                             className='hidden sm:flex items-center gap-[20px] text-lg border bg-gray-100 dark:bg-gray-700 dark:text-gray-200 py-1.5 px-4 rounded-lg shadow-sm cursor-pointer dark:border-gray-500 hover:bg-gradient-to-br hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:text-white'>
                        <FaArrowRightLong /> Начать работу</NavLink>
                    <ThemeChanger></ThemeChanger>
                    <SelectLanguage aos='fade-left'/>
                </div>
            </nav>

        </div>
    )
}