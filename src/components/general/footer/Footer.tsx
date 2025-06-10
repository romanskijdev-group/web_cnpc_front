import { PiGithubLogoFill } from 'react-icons/pi'
import { CgOrganisation } from 'react-icons/cg'
import { BiLogoTypescript, BiSupport } from 'react-icons/bi'
import { IoCodeWorkingSharp } from 'react-icons/io5'
import { IoIosHeart } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { AiFillCodeSandboxCircle } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className='flex flex-col items-center justify-center dark:text-gray-200 mt-[150px] bg-gray-100 dark:bg-[#202126] dark:border-[#27282D] border-t border-gray-200' data-aos='fade-in'>
            <div
                className='gap-[50px] px-4 py-12 w-full flex flex-row flex-wrap justify-start sm:justify-center'>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[10px] dark:text-gray-200'>
                        <AiFillCodeSandboxCircle className='text-4xl dark:text-white'/>
                        <h1 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">QuestHolder</h1>
                    </div>
                    <p className="dark:text-gray-300 ml-12 text-gray-700 ">{t('footer.description')}</p>
                    <div className='flex'>
                        <a href='https://github.com/romanskijdev-group'
                            className='dark:hover:bg-gray-700 hover:bg-gray-200 duration-300 flex items-center justify-center w-max p-4 rounded-full border dark:border-gray-500 ml-12'><PiGithubLogoFill /></a>
                    <a href='https://github.com/romanskijdev-group'
                            className='dark:hover:bg-gray-700 hover:bg-gray-200 duration-300 flex items-center justify-center w-max p-4 rounded-full border dark:border-gray-500 ml-4'><FaTelegramPlane /></a>
                    </div>
                </div>

                <div className='flex flex-col justify-start gap-[10px]'>
                    <h1 className="text-base flex items-center gap-[10px] font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                        <CgOrganisation /> {t('footer.org')}</h1>
                    <a href='https://google.com/'
                        className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>{t('footer.main')}</a>
                    <a href='https://google.com/'
                        className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>{t('footer.partners')}</a>
                    <a href='https://google.com/'
                        className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>{t('footer.about')}</a>
                    <a href='https://google.com/'
                        className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>{t('footer.features')}</a>
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <h1 className="text-base flex items-center gap-[10px] font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                        <BiSupport /> {t('footer.support')}</h1>
                    <a href='https://google.com/'
                        className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>{t('footer.contacts')}</a>
                    <a href='https://google.com/'
                        className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>{t('footer.vip')}</a>
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <h1 className="text-base flex items-center gap-[10px] font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                        <IoCodeWorkingSharp /> {t('footer.resources')}</h1>
                    <a href='https://google.com/'
                        className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>{t('footer.controlPanel')}</a>
                    <a href='https://google.com/'
                        className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>{t('footer.usagePolicy')}</a>
                    <NavLink to='/user_agreement'
                        className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>{t('footer.termsOfService')}</NavLink>
                </div>
            </div>
            <p className='flex items-center justify-center bg-transparent text-center py-2 border-t dark:border-gray-500/50 w-full sm:w-1/2 sm:text-sm text-[10px]'>Copyright © 2024 QuestHolder. Made with <IoIosHeart className='text-red-500'/> and <BiLogoTypescript className='text-blue-400'/> for better questing.</p>
        </div>
    )
}

