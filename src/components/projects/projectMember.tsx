import React from 'react';
import { UserName } from '../../ui/user/UserName';
import { UserAvatar } from '../../ui/user/UserAvatar';

interface ProjectMemberProps {
  name: string;  
}

export const ProjectMember: React.FC<ProjectMemberProps> = ({ name }) => {
  return (
    <li className="flex items-center py-2 border-b border-gray-200 text-black dark:text-white dark:border-gray-700 last:border-b-0">
        <div className='mr-4'>
            <UserAvatar avatar_url={''} nickname={''}></UserAvatar>
        </div>
      <UserName name={name}></UserName>
    </li>
  );
};

export default ProjectMember;