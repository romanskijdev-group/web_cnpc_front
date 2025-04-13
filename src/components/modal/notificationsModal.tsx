import React, { useState, useEffect, useRef } from 'react';
import { FaBell, FaArrowUp, FaArrowDown } from 'react-icons/fa';
<<<<<<< Updated upstream
import { NotificationBlock } from '../notification/notificationBlock';

interface NotificationItem {
  id: number;
  title: string;
  body: string;
  isRead: boolean;
  date: Date; // Добавляем поле date для сортировки
}
=======
import { NotificationsList } from '../notification/notificationBlock';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GetUserNotifications } from '../../features/api/notification.ts';
// import { UpdateUserNotifications } from '../../features/api/notification.ts';
>>>>>>> Stashed changes

interface NotificationMenuProps {
  onUnreadCountChange: (count: number) => void;
  onClose: () => void;
}

export const NotificationMenu: React.FC<NotificationMenuProps> = ({ onUnreadCountChange, onClose }) => {
  const [notifications, setNotifications] = useState<NotificationResponseData[]>([]);
  const [activeTab, setActiveTab] = useState('Все');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // Состояние для сортировки
  const menuRef = useRef<HTMLDivElement>(null);
  
  const queryClient = useQueryClient();

  const mutation = useMutation<ArrayApiResponse<NotificationResponseData>, Error>({
    mutationFn: async () => {
      return await GetUserNotifications();
    },
    onSuccess: (data: ArrayApiResponse<NotificationResponseData>) => {
      queryClient.setQueryData(['user_notifications'], data.data);
      console.log('Уведомление пользователя:', data);
      console.log('Уведомление пользователя', data.data);
    },
    onError: (error: Error) => {
      console.error('Ошибка отправки пароля:', error);
    }
  });

  // Эмуляция данных для примера
  useEffect(() => {
    // Запускаем мутацию при монтировании компонента
    mutation.mutate();
  }, [mutation.mutate]);

  const userNotification = queryClient.getQueryData<NotificationResponseData[]>(['user_notifications']);

useEffect(() => {
  setNotifications(userNotification ? userNotification : []);
}, [userNotification]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    onUnreadCountChange(notifications.filter(notification => !notification.reading).length);
  }, [notifications, onUnreadCountChange]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
  };

  // const updateNotificationMutation = useMutation<ArrayApiResponse<NotificationResponseData>, Error>({
  //   mutationFn: async () => {
  //     return await UpdateUserNotifications();
  //   },
  //   onSuccess: (data: ArrayApiResponse<NotificationResponseData>) => {
  //     queryClient.setQueryData(['user_notifications'], data.data);
  //     console.log('Уведомления успешно обновлены:', data);
  //   },
  //   onError: (error: Error) => {
  //     console.error('Ошибка при обновлении уведомлений:', error);
  //   }
  // });

  // const loadMoreNotifications = () => {
  //   updateNotificationMutation.mutate();
  // };

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div 
      ref={menuRef} 
      className="fixed px-4 top-20 right-10 w-[calc(40%-10px)] max-w-[calc(40%-10px)] lg:max-w-[calc(40%-13px)] mt-1 border dark:border-gray-800 rounded-lg shadow-lg bg-white dark:bg-[#1B1D23] text-black dark:text-gray-100 z-[1000] animate-slide-in"
    >
      {/* Шапка с кнопкой сортировки */}
      <div className="m-4 px-4 py-2 border-gray-300 dark:border-gray-600 flex justify-between items-center">
        <div className="flex items-center space-x-2" onClick={toggleSortOrder}>
          <h2 className="text-xl font-bold text-black dark:text-gray-100 cursor-pointer">Уведомления</h2>
          {sortOrder === 'desc' ? (
            <FaArrowDown className="text-gray-500 dark:text-gray-400 cursor-pointer" />
          ) : (
            <FaArrowUp className="text-gray-500 dark:text-gray-400 cursor-pointer" />
          )}
        </div>
        <button 
          className="hover:text-blue-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded transition duration-300"
          onClick={markAllAsRead}
        >
          Отметить все как прочитанные
        </button>
      </div>

      {/* Вкладки */}
      <div className="tabs flex space-x-4 border-b border-gray-300 dark:border-gray-600 mb-4 overflow-x-auto">
        <button className={`flex-1 text-lg font-semibold py-2 ${activeTab === 'Все' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 dark:text-gray-300 border-transparent'}`} onClick={() => setActiveTab('Все')}>Все</button>
        <button className={`flex-1 text-lg font-semibold py-2 ${activeTab === 'Личные' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 dark:text-gray-300 border-transparent'}`} onClick={() => setActiveTab('Личные')}>Личные</button>
        <button className={`flex-1 text-lg font-semibold py-2 ${activeTab === 'Системные' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 dark:text-gray-300 border-transparent'}`} onClick={() => setActiveTab('Системные')}>Системные</button>
        <button className={`flex-1 text-lg font-semibold py-2 ${activeTab === 'Новости' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 dark:text-gray-300 border-transparent'}`} onClick={() => setActiveTab('Новости')}>Новости</button>
        <button className={`flex-1 text-lg font-semibold py-2 ${activeTab === 'Непрочитанные' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 dark:text-gray-300 border-transparent'}`} onClick={() => setActiveTab('Непрочитанные')}>Непрочитанные</button>
      </div>

      {/* Подсказка о разрешении уведомлений */}
      <div className="flex justify-center items-center rounded-lg p-2 bg-[#1893D5] dark:bg-[#071318] mt-2 mb-4 border-gray-300 dark:border-gray-600 mx-4">
        <FaBell className="text-blue-600 mr-2" size={20} />
        <span className="text-sm font-semibold">Будьте в курсе новых событий</span>
        <button 
          className="ml-4 px-4 py-1 text-white text-xs font-semibold rounded shadow-md transition duration-300"
        >
          Разрешить уведомления
        </button>
      </div>

      {/* Список уведомлений */}
      <div className="px-6 py-4 bg-white dark:bg-[#1B1D23]">
<<<<<<< Updated upstream
        {filteredAndSortedNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-500 dark:text-gray-400">Здесь пока ничего нет.</p>
          </div>
        ) : (
          <>
            {filteredAndSortedNotifications.map((notification) => (
              <NotificationBlock 
                key={notification.id} 
                title={notification.title}
                isRead={notification.isRead}
                onClick={() => markAsRead(notification.id)}
              >
                {notification.body}
              </NotificationBlock>
            ))}
            
            {/* Кнопка "Загрузить ещё" */}
            <div className="flex justify-center mt-4">
              <button 
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                onClick={loadMoreNotifications}
              >
                Загрузить ещё
              </button>
            </div>
          </>
        )}
=======
  {notifications.length === 0 ? (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-gray-500 dark:text-gray-400">Здесь пока ничего нет.</p>
    </div>
  ) : (
    <>
      <NotificationsList notifications={notifications} />
      
      <div className="flex justify-center mt-4">
        <button 
          className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          // onClick={loadMoreNotifications}
        >
          Загрузить ещё
        </button>
>>>>>>> Stashed changes
      </div>
    </>
  )}
</div>
    </div>
  );
};