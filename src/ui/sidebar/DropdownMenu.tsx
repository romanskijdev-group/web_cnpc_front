import React, { useState } from 'react';
import { FaArrowDownLong } from 'react-icons/fa6'
import { GoArrowRight } from 'react-icons/go'

type DropdownMenuProps = {
    menuItems: string[];
    title: string;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menuItems , title}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="rounded-lg mb-4 list-none">
            <button onClick={toggleMenu} className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-200 font-light px-4 py-3 rounded-lg">
                <FaArrowDownLong  className={`transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                {title}
            </button>

            {isOpen && (
                <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-200 font-light px-4 py-3 rounded-lg">
                    {menuItems.map((item, index) => (
                        <li key={index} className="ml-[10px] text-sm cursor-pointer flex items-center gap-[10px] px-[10px] py-[3px] rounded-lg hover:bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 hover:text-white hover:shadow-lg">
                            <GoArrowRight />
                            {item}
                        </li>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
