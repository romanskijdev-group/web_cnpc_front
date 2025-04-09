import React from 'react';

interface NotificationBlockProps {
  title: string;
  children: React.ReactNode;
  isRead: boolean;
  onClick: () => void;
}

export const NotificationBlock: React.FC<NotificationBlockProps> = ({ title, children, isRead, onClick }) => {
  return (
    <div 
      className={`border-b border-gray-300 py-4 px-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 rounded-xl mb-4 ${isRead ? 'bg-white dark:bg-gray-800' : 'bg-gray-200 dark:bg-gray-900'}`}
      onClick={onClick}
    >
      <div className="flex items-center">
        {!isRead && (
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mr-2"></div>
        )}
        <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>
      </div>
      <div className="text-gray-700 dark:text-gray-300 mt-2">{children}</div>
    </div>
  );
};