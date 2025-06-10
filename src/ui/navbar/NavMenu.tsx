import React from 'react';

interface NavMenuProps {
    children: React.ReactNode;
    aos?: string;
    className?: string; 
}

export const NavMenu: React.FC<NavMenuProps> = ({ children, aos, className }) => {
    return (
        <div
            className={`items-center bg-white justify-between hidden w-max md:flex md:w-auto border dark:bg-[#1B1C22] dark:border-[#27282D] rounded-lg px-4 py-1 ${className}`}
            id="navbar-user"
            data-aos={aos}
        >
            <ul className="flex flex-row font-medium md:p-0 mt-4 border rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#1B1C22] dark:border-[#27282D]">
                {children}
            </ul>
        </div>
    );
};