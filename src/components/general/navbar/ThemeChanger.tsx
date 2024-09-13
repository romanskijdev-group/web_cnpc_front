import { FaMoon } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { LuSunMoon } from 'react-icons/lu'
import Cookies from 'js-cookie'

export const ThemeChanger = () => {
    const [isDark, setIsDark] = useState(Cookies.get('darkTheme') === 'true');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    useEffect(() => {
        Cookies.set('darkTheme', String(isDark));
    }, [isDark]);


    return(
        <div className='z-50 bg-gray-100 border border-transparent dark:text-white dark:border dark:border-gray-500 dark:bg-gray-700 rounded-lg p-3 hover:opacity-60 duration-300 cursor-pointer' onClick={() => {setIsDark(!isDark)}}>
            {
                isDark ? <FaMoon /> : <LuSunMoon />
            }
        </div>
    )
}
