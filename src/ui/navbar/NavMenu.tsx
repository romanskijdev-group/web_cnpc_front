import React from 'react'

export const NavMenu = ({ children, aos }: {children: React.ReactNode, aos?:string}) => {
    return (
        <div className="items-center bg-white dark:bg-gray-700 justify-between hidden w-max md:flex md:w-auto border dark:border-gray-500 rounded-lg px-4 py-1"
             id="navbar-user"
             data-aos={aos}>
            <ul className="flex flex-row font-medium md:p-0 mt-4 border rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 dark:border-gray-700">
                { children }
            </ul>
        </div>
    )
}
