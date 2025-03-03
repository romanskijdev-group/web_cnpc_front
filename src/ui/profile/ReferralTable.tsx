import React, { useState } from 'react';

export const ReferralTable: React.FC = () => {
    const [invitationLink, setInvitationLink] = useState<string>('');
    const [referrals, setReferrals] = useState<any[]>([]);

    const handleInviteClick = () => {
    console.log('Запрос на ссылку отправлен');
    // Сюда запрос на API
    };

    return (
    <div className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
        <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Ваши рефералы</h2>
        {referrals.length > 0 ? (
            <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-2 border-b text-left">#</th>
                <th className="p-2 border-b text-left">Имя</th>
                <th className="p-2 border-b text-left">Email</th>
                <th className="p-2 border-b text-left">Дата регистрации</th>
                </tr>
            </thead>
            <tbody>
                {referrals.map((referral, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
                    <td className="p-2 border-b">{index + 1}</td>
                    <td className="p-2 border-b">{referral.name}</td>
                    <td className="p-2 border-b">{referral.email}</td>
                    <td className="p-2 border-b">{referral.date}</td>
                </tr>
                ))}
            </tbody>
            </table>
        ) : (
            <p className="text-center text-gray-500 py-4">У вас нет рефералов</p>
        )}
        </div>

        <div className="flex items-center">
        <input
            type="text"
            value={invitationLink}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
            placeholder="Ссылка-приглашение будет здесь"
        />
        <button
            onClick={handleInviteClick}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 flex-shrink-0"
        >
            Получить вашу ссылку-приглашение
        </button>
        </div>
    </div>
    );
};

export default ReferralTable;