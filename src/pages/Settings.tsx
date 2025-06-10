import { ProfileHeader } from "../ui/profile/ProfileHeader.tsx";
import { FaCog, FaTrashAlt, FaRegTrashAlt } from 'react-icons/fa';
import { LuUpload } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import React, { useState } from "react";
import UploadModal from "../ui/modal/UploadFile.tsx";
import { SelectLanguage } from "../components/general/navbar/SelectLanguage.tsx";
import { useTranslation } from "react-i18next";
import Stepper from "../ui/profile/Stepper.tsx";
import SettingsForm from "../ui/profile/SettingsForm.tsx";
import Toggle from "../ui/input/Toggle.tsx";
import { IoSaveOutline } from "react-icons/io5";
import DeleteProfileModal from "../components/modal/DeleteProfileModal.tsx";
import { Button } from "../ui/buttons/ButtonDefault.tsx";
import axios from 'axios';
import Cookies from 'js-cookie';

interface SettingsFormData {
    nickname: string;
    gender: string;
    email: string;
    password: string;
    repeat_password: string;
    first_name: string;
    last_name: string;
    company: string;
    bio: string;
}

const profileSettingsHeader = () => {
    const { t } = useTranslation();
    return (
        <ProfileHeader>
            <div className='relative flex justify-center items-center w-full h-full overflow-hidden'>
                <FaCog className='absolute inset-0 w-full h-full opacity-10 text-red-500'
                       style={{ transform: 'translate(-25%, 25%)' }} />
                <div className='text-center flex flex-col gap-3'>
                    <p className='text-gray-700 dark:text-[#8D8E91] font-semibold text-2xl z-10'>{t('profile.settings.title')} </p>
                    <p className='text-gray-700 font-light opacity-75 text-sm w-2/3 mx-auto z-10 dark:text-white'>{t('profile.settings.subtitle')}</p>
                </div>
            </div>
        </ProfileHeader>
    )
}

const uploadAvatar = async (file: File): Promise<any> => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const token = Cookies.get('accessToken');

    if (!backendUrl) {
        throw new Error('Backend URL is not defined');
    }

    if (!token) {
        throw new Error('Invalid token auth');
    }

    const formData = new FormData();
    formData.append('avatar', file);

    try {
        const response = await axios.put(`${backendUrl}/api/profile/user/avatar`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('Ответ сервера:', response.data); // Логируем ответ сервера
        return response.data;
    } catch (error: any) {
        console.error('Ошибка сервера:', error.response?.data || error.message); // Логируем ошибку
        throw error;
    }
};

export const ProfileSettings: React.FC = () => {
    const { t } = useTranslation();
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [fileURL, setFileURL] = useState<string | null>(null);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleFileSelect = (file: File) => {
        setSelectedFile(file);
        setFileName(file.name);
        setFileURL(URL.createObjectURL(file));
        closeModal();
    };

    const clearFile = () => {
        setSelectedFile(null);
        setFileName(null);
        setFileURL(null);
    };

    const saveAvatar = async () => {
        if (!selectedFile) {
            alert('Выберите файл перед сохранением.');
            return;
        }

        try {
            await uploadAvatar(selectedFile);
            alert('Аватар успешно сохранен!');
        } catch (error) {
            console.error('Ошибка при сохранении аватара:', error);
            alert('Не удалось сохранить аватар. Попробуйте снова.');
        }
    };

    const [formData, setFormData] = useState<SettingsFormData>({
        bio: "",
        gender: "", nickname: "",
        email: '',
        password: '',
        repeat_password: '',
        first_name: '',
        last_name: '',
        company: ''
    });

    const handleFormSubmit = (data: SettingsFormData) => {
        setFormData(data);
        console.log('Полученные данные:', data);
    };

    const [toggleChecked, setToggleChecked] = useState(true);
    const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToggleChecked(e.target.checked);
    };

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const handleDeleteClick = () => {
        setDeleteModalOpen(true);
    };
    const handleCloseDeleteModal = () => {
        setDeleteModalOpen(false);
    };
    const handleConfirmDelete = () => {
        // Логика удаления профиля
        setDeleteModalOpen(false);
    };

    return (
        <>
            {profileSettingsHeader()}
            <div className="col-start-2 row-start-2 col-span-2 p-2 w-128 rounded-lg relative flex place-content-between gap-8">
                <div className="flex flex-col gap-3 w-max">
                    <p className="text-gray-700 font-light opacity-50 text-sm w-2/3 z-10 dark:text-white">
                        {t('profile.settings.language')}:
                    </p>
                    <SelectLanguage />
                </div>
            </div>

            <div className="col-start-2 row-start-4 col-span-2 p-2 rounded-lg relative flex flex-col gap-3 w-full">
                <Stepper></Stepper>
            </div>
            <div className="col-start-2 row-start-5 col-span-2 p-2 rounded-lg relative">
                <div className="flex flex-row items-center gap-8">
                    <div
                        className={`${
                            !fileURL
                                ? 'border-gray-200 border-dashed dark:border-[#27282D] hover:dark:bg-[#1B1C22] hover:dark:bg-opacity-70'
                                : ''
                        } flex items-center dark:border-[#27282D] justify-center min-w-[120px] min-h-[120px] w-max border-[2px] rounded-full cursor-pointer transition duration-300 hover:bg-white`}
                        style={{
                            backgroundImage: fileURL ? `url(${fileURL})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {!fileURL && <CgProfile className="text-3xl dark:text-[#8B8B8E]" />}
                    </div>
                    <div onClick={openModal}
                         className="bg-yellow-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-yellow-500 hover:dark:bg-yellow-700 transition duration-300 flex gap-4 items-center justify-center">
                        <LuUpload className="text-xl" />
                        {t('profile.settings.upload_avatar')}
                    </div>
                    <UploadModal isOpen={isModalOpen} onClose={closeModal} onFileSelect={handleFileSelect} />
                </div>
                {fileName && (
                    <div className="mt-4 flex items-center gap-4">
                        <p className="text-gray-700 dark:text-white">{t('profile.settings.file')}: {fileName}</p>
                        <button onClick={clearFile}
                                className="p-2 bg-red-500 text-white dark:bg-red-700 rounded flex gap-3 items-center justify-center">
                            <FaTrashAlt /> Очистить
                        </button>
                    </div>
                )}
            </div>
            <div className="col-start-2 row-start-6 col-span-2 p-2 rounded-lg relative flex flex-col gap-3 w-full">
                <SettingsForm onDataChange={handleFormSubmit} formData={formData}></SettingsForm>
            </div>
            <div className="col-start-2 row-start-7 col-span-2 p-2 rounded-lg relative flex flex-col gap-3 w-full">
                <Toggle
                    checked={toggleChecked}
                    onChange={handleToggleChange}
                    label="Получать уведомления"
                />
            </div>
            <div className="col-start-2 row-start-8 col-span-2 p-2 relative flex flex-col gap-3 w-full items-end">
                <Button
                    title={t('profile.settings.save_profile')}
                    onClick={saveAvatar}
                    className="bg-green-700 text-white max-w-xs h-10 flex gap-3 items-center justify-center"
                    icon={<IoSaveOutline />}
                />
            </div>
            <div className="col-start-2 row-start-9 col-span-2 p-2 relative flex flex-col gap-3 w-full items-start">
                <Button
                    title={t('profile.settings.delete_profile')}
                    onClick={handleDeleteClick}
                    className="bg-red-700 text-white max-w-xs h-10 flex gap-3 items-center justify-center"
                    icon={<FaRegTrashAlt />}
                />
            </div>
            <DeleteProfileModal
                isOpen={isDeleteModalOpen}
                onClose={handleCloseDeleteModal}
                onConfirm={handleConfirmDelete}
            />
        </>
    );
};

export default ProfileSettings;