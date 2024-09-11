import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../features/redux/store'
import { Search } from '../ui/input/SearchInput'
import { UserBlock } from '../components/UserBlock'
import { MobileNavigation } from '../components/MobileNavigation'
import { ProjectSelect } from '../components/projects/ProjetSelect'
import { SelectedProjectNpc } from '../components/selectedProject/Npc'

const NPCPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const selected = useSelector((state: RootState) => state.projects.selectedProject);

    return (
        <div className='flex flex-col gap-[20px]'>
            <div className='flex w-full justify-between items-center'>
                <Search searchValue={searchValue} setValue={setSearchValue}></Search>
                <UserBlock className='sm:flex hidden gap-[20px]'/>
                <MobileNavigation/>
            </div>
            { selected != '' ? <SelectedProjectNpc/> : <ProjectSelect includeValue={searchValue}/> }
        </div>
    )
}

export default NPCPage
