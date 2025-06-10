import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Button } from '../../ui/buttons/Button';

interface SubscriptionCardProps {
    title: string;
    price: number;
    body?: React.ReactNode | React.ReactNode[];
    buttonText: string;
    onPurchase?: () => void;
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
    title,
    price,
    body,
    buttonText,
    onPurchase,
}) => {
    return (
        <div className="relative flex flex-col justify-between bg-white dark:bg-[#1B1C22] rounded-lg shadow-md p-6 text-left hover:translate-y-[-7px] transition-transform duration-300">
            <div>
                <h2 className="text-2xl font-bold dark:text-white mb-4">{title}</h2>
                <p className="text-xl font-semibold dark:text-gray-400 mb-6">
                    {price === 0 ? 'Бесплатно' : `$${price}/месяц`}
                </p>
                <ul className="list-none pl-6 mb-6">
                    {Array.isArray(body) ? (
                        body.map((item, index) => (
                            <li key={index} className="relative mb-4 pl-10 dark:text-gray-300">
                                <FaCheckCircle className="absolute left-0 top-0 mt-1 text-green-500" />
                                {item}
                            </li>
                        ))
                    ) : (
                        <li className="relative mb-4 pl-10 text-gray-300">
                            <FaCheckCircle className="absolute left-0 top-0 mt-1 text-green-500" />
                            {body}
                        </li>
                    )}
                </ul>
            </div>
            <div className="mt-6">
                {price === 0 ? (
                    <a href="/dashboard/home">
                        <Button
                            title={buttonText}
                            className="w-full bg-blue-500 text-white px-10 py-3 rounded-full transition transform hover:scale-105 duration-300"
                        />
                    </a>
                ) : (
                    <Button
                        title={buttonText}
                        className="w-full bg-blue-500 text-white px-10 py-3 rounded-full transition transform hover:scale-105 duration-300"
                        onClick={onPurchase}
                    />
                )}
            </div>
        </div>
    );
};

export default SubscriptionCard;