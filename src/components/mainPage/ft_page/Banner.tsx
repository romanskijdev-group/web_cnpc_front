import { FC } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltDown } from 'react-icons/fa';
import gif from '../../../assets/project_creating.gif';
import { useTranslation } from 'react-i18next';

export const Banner: FC = () => {
    const { t } = useTranslation();
    return (
        <div
            data-aos='fade-up'
            className='mt-5 bg-white border dark:bg-[#1B1C22] dark:border-[#27282D] rounded-lg px-5 py-10 w-[90%] dark:text-gray-200 sm:max-w-screen-xl mx-auto z-50 flex flex-col gap-[30px]'
        >
            <h1 className='text-4xl sm:text-4xl text-center sm:w-[50%] mx-auto font-bold bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent'>
                {t('banner.title')}
            </h1>
            <p className='opacity-60 text-center sm:w-[70%] mx-auto text-base'>{t('banner.body')}</p>
            <div className='w-max mx-auto flex flex-col gap-[5px]'>
                <NavLink
                    data-aos='fade-in'
                    to='/dashboard/home'
                    className='flex items-center gap-[20px] text-lg border bg-gray-100 dark:border-gray-500 dark:bg-gray-700 py-1.5 px-4 rounded-lg shadow-sm cursor-pointer bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white'><FaArrowRightLong /> {t('general.start')}
                </NavLink>
                <a
                    data-aos='fade-in'
                    href='#about'
                    className='text-center text-sm underline text-gray-500 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 duration-300 cursor-pointer'>{t('general.what_is')}</a>
            </div>
            <div className='mx-auto items-center justify-center flex w-max rounded-lg'>
                <img
                    src={gif}
                    className='w-[90%] h-[22vh] md:w-[100%] md:h-[25vh] rounded-lg'
                    alt=''
                />
            </div>
            <div className='flex flex-row justify-between gap-[10px] items-center opacity-60 duration-300 hover:opacity-100 w-max mx-auto rounded-lg py-1.5 px-2 cursor-pointer'>
                <FaLongArrowAltDown className='animate-bounce text-sm text-yellow-600' />
                <a href='#capabilities'>{t('general.find_out')}</a>
                <FaLongArrowAltDown className='animate-bounce text-sm text-yellow-600' />
            </div>
        </div>
    );
};