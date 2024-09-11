import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/redux/store'

interface SelectProps {
    items: string;
    setItems: (value: string) => void;
}

export const Select:React.FC<SelectProps> = ({ items, setItems }) => {
    const [show, setShow] = useState(false)
    const versions = useSelector((state: RootState) => state.versions.versions);

    return(
        <div className="flex items-end w-full flex-col relative">
            <button
                onClick={() => {setShow(!show)}}
                className="justify-between bg-gray-50 w-full flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-200">
                {items ? items : <span className='opacity-30'>Выбрать версию</span>}
                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div className={`z-[1001] ${show ? 'block' : 'hidden'} absolute top-[50px] bg-white divide-y divide-gray-100 rounded-lg shadow w-max`}>
                <ul className="py-2 text-sm text-gray-700">
                    {
                        versions.map((item) => (
                            <li key={item}>
                                <p onClick={() => { setItems(item); setShow(false) }}
                                   className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    {item}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}