import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import MembersTab from '../projects/memberTab';

const SettingsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('general');
  const [projectName, setProjectName] = useState('');
  const [projectVersion, setProjectVersion] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [initialName, setInitialName] = useState('');
  const [initialVersion, setInitialVersion] = useState('');
  const [initialDescription, setInitialDescription] = useState('');

  useEffect(() => {
    if (isOpen) {
      setInitialName(projectName);
      setInitialVersion(projectVersion);
      setInitialDescription(projectDescription);
    }
  }, [isOpen]);

  const handleSave = () => {
    console.log('Изменения сохранены');
    onClose();
  };

  const handleClose = () => {
    setProjectName(initialName);
    setProjectVersion(initialVersion);
    setProjectDescription(initialDescription);
    onClose();
  };

  const members = [
    { id: 1, name: 'Sansara (Вы)' },
    { id: 2, name: 'MrFoxHD' },
    { id: 3, name: 'Justie' },
  ];

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`z-[1000] absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.4)] transition ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <div className="bg-white dark:bg-[#1B1C22] w-[calc(90%)] h-[calc(70%)] max-w-[700px] py-[10px] px-[20px] rounded-lg absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-md transition-all duration-500 ease-in-out">
        <svg
          className='z-[1000] hover:rotate-180 absolute right-[10px] top-[10px] w-[24px] h-[24px] cursor-pointer opacity-30 hover:opacity-100 transition duration-500'
          onClick={handleClose}
          height="200"
          viewBox="0 0 200 200"
          width="200">
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-4">
            <button
              className={`py-2 px-4 ${activeTab === 'general' ? 'border-b-2 border-blue-500 text-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('general')}
            >
              {t('project.generalSettings')}
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'members' ? 'border-b-2 border-blue-500 text-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('members')}
            >
              {t('project.members')}
            </button>
          </nav>
        </div>
        <div className="flex-grow overflow-auto">
          {activeTab === 'general' && (
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  {t('project.projectName')}
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder={t('project.projectName')}
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-sm resize-none"
                  maxLength={50}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  {t('project.projectVersion')}
                </label>
                <select
                  value={projectVersion}
                  onChange={(e) => setProjectVersion(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-sm"
                >
                  <option value="1.7.10">1.7.10</option>
                  <option value="1.12.2">1.12.2</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  {t('project.projectDescription')}
                </label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder={t('project.projectDescription')}
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-sm resize-none"
                  maxLength={1000}
                  rows={10}
                  cols={75}
                />
              </div>
            </div>
          )}
          {activeTab === 'members' && (
            <MembersTab members={members} />
          )}
        </div>
        <div className="flex justify-end gap-4 p-4 border-t border-gray-200 dark:border-gray-700 mb-2">
          <button onClick={handleSave} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            {t('project.save')}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SettingsModal;