import { PartnerItem } from './Partner.tsx'
import pelicanLogo from '../../../assets/elician.svg'

export const CreatedWith = () => {
    return(
        <div data-aos='fade-up' id='created-with' className="z-50">
            <div
                className="w-full bg-[#fff] bg-opacity-25 dark:bg-opacity-20 border dark:border-gray-500 flex flex-col flex-wrap items-center justify-between mx-auto sm:px-5 py-5 mt-10">
                <p className='text-2xl sm:text-3xl font-bold mb-[30px] text-center dark:text-gray-200'>Разработано при поддержке:</p>

                <div className='flex flex-row flex-wrap items-center justify-between gap-[30px]'>
                    <PartnerItem title='Elician.ru' link='https://elician.ru/' image={pelicanLogo} description='Проект Minecarft-серверов'/>
                </div>
            </div>
        </div>
    )
}