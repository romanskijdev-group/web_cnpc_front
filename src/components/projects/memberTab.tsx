import React from 'react';
import ProjectMember from '../projects/projectMember';
import { useTranslation } from 'react-i18next';

interface MembersTabProps {
  members: { id: number; name: string }[];
}

const MembersTab: React.FC<MembersTabProps> = ({ members }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        {t('project.memberList')}
      </h2>
      <ul className="list-none p-0">
        {members.map((member) => (
          <ProjectMember key={member.id} name={member.name} />
        ))}
      </ul>
    </div>
  );
};

export default MembersTab;