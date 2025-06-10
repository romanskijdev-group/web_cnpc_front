import { CiImageOff } from "react-icons/ci";
import { ProfileHeader } from "./ProfileHeader.tsx";
import { FiCopy } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GetUserProfile } from '../../features/api/profile.ts';
import { UserAvatar } from '../user/UserAvatar.tsx';

export const ProfileUser = () => {
    const queryClient = useQueryClient();
    const userProfile = queryClient.getQueryData<UserProfileResponseData>(['user_profile']);
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [tooltip, setTooltip] = useState<string>("Скопировать ID");

    const handleCopy = () => {
        navigator.clipboard.writeText(`#${userProfile?.serial_id || ''}`).then(() => {
            setTooltip('ID скопирован');
            setTimeout(() => setTooltip("Скопировать ID"), 2000);
        }).catch(() => {
            setTooltip('Ошибка копирования ID');
            setTimeout(() => setTooltip("Скопировать ID"), 2000);
        });
    };

    const mutation = useMutation<ApiResponse<UserProfileResponseData>, Error>({
        mutationFn: async () => {
            return await GetUserProfile();
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['user_profile'], data.data);
        },
        onError: (error) => {
            console.error('Ошибка загрузки профиля:', error);
        }
    });

    useEffect(() => {
        if (!userProfile) {
            mutation.mutate();
        }
    }, []);

    return (
        <ProfileHeader>
            <div className='flex flex-col gap-[10px] items-center p-6'>
                {userProfile ? (
                    userProfile.avatar_url ? (
                        <UserAvatar avatar_url={userProfile.avatar_url} nickname={userProfile.nickname} className='w-[120px] h-[120px]' />
                    ) : (
                        <div className='rounded-full border dark:border-[#27282D] w-[120px] flex items-center justify-center h-[120px]'>
                            <CiImageOff className='text-5xl dark:text-white' />
                        </div>
                    )
                ) : (
                    <div className='animate-pulse rounded-full bg-gray-200 dark:bg-[#27282D] w-[120px] h-[120px]' />
                )}
                <p className='text-gray-700 font-semibold text-2xl dark:text-[#8D8E91] z-10'>
                    {userProfile?.nickname || 'Загрузка...'}
                </p>
                <p className='text-gray-700 font-light opacity-50 text-sm z-10 dark:text-white text-center'>
                    {userProfile?.first_name || 'Имя не задано'}
                </p>

                <div className='relative flex justify-center items-center'>
                    <p className='text-gray-700 font-light text-sm z-10 dark:text-white flex justify-center items-center gap-2'>
                        User #{userProfile?.serial_id || 'Загрузка...'}
                        <FiCopy
                            className='cursor-pointer'
                            onClick={handleCopy}
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                        />
                    </p>
                    {tooltipVisible && (
                        <div className="absolute bottom-0 right-0 transform translate-x-[120%] p-1 bg-gray-700 text-white text-xs rounded transition-opacity duration-300">
                            {tooltip}
                        </div>
                    )}
                </div>

                <div className='border dark:border-[#27282D] dark:text-[#8B8B8E] w-4/5 p-2 rounded-lg text-center'>
                    <p>{userProfile?.bio || 'Люблю вечеринки 🎉'}</p>
                </div>
                <div className='absolute right-4 md:right-10 border rounded-lg px-4 py-1 bg-gray-700 text-white dark:text-opacity-50 dark:bg-[#202126] dark:border-[#414246]'>
                    {userProfile?.role || 'Пользователь'}
                </div>
            </div>
        </ProfileHeader>
    );
};