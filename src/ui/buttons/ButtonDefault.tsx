import React from 'react';
import { MouseEventHandler } from 'react';

interface ButtonProps {
    title: string; 
    onClick?: MouseEventHandler<HTMLButtonElement>; 
    className?: string; 
    children?: React.ReactNode; 
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ title, onClick, className, icon }) => {
    return (
        <button 
            onClick={onClick}
            className={`text-white shadow-md px-4 py-2 cursor-pointer transition duration-300 items-center justify-center rounded-lg ${className || ''}`}>
            {icon && <span className="">{icon}</span>}
            {title}
        </button>
    );
};