import {useTranslation} from "react-i18next";

export const About = () => {
    const { t } = useTranslation();

    return(
        <div className='sm:max-w-screen-xl w-[90%] mx-auto mt-[150px] border dark:border-gray-500 rounded-lg p-4' id='about' data-aos='fade-up'>
            <h1 className='dark:text-gray-200 text-center text-xl sm:text-3xl'>{t('general.what_is')}</h1>
        </div>
    )
}