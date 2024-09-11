import { useSelector } from 'react-redux'
import { RootState } from '../../features/redux/store'
import { CreateProject } from '../../components/modal/CreateProject'
import { useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { ProjectBlock } from './ProjectBlock'

export const ProjectFilled = ( { includeValue }: { includeValue: string } ) => {
    const projects = useSelector((state: RootState) => state.projects);
    const [openCreate, setOpenCreate] = useState(false)

    return(
        <div className='w-full h-max min-h-[300px] flex flex-col py-[20px] items-center'>
            <p onClick={() => {
                setOpenCreate(!openCreate)
            }} className='font-semibold text-xl opacity-50 flex items-center gap-[10px] hover:opacity-100 transition duration-400 cursor-pointer sm:text-xl dark:text-gray-200 mb-[20px]'><IoAdd /> Создать проект </p>
            {
                projects.projects.filter((item) => {
                    return item.toLowerCase().includes(includeValue.toLowerCase())
                }).map((item) => (
                    <ProjectBlock key={item} title={item}/>
                ))
            }
            <CreateProject setOpen={setOpenCreate} open={openCreate}/>
        </div>
    )
}