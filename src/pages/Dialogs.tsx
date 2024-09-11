import { ProjectSelect } from '../components/projects/ProjetSelect'
import { Search } from '../ui/input/SearchInput'
import { UserBlock } from '../components/UserBlock'
import { MobileNavigation } from '../components/MobileNavigation'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../features/redux/store'
import { SelectedProjectDialogs } from '../components/selectedProject/Dialogs'

const Dialogs = () => {
    const [searchValue, setSearchValue] = useState('')
    const selected = useSelector((state: RootState) => state.projects.selectedProject);

    return (
        <div className='flex flex-col gap-[20px]'>
            <div className='flex w-full justify-between items-center'>
                <Search searchValue={searchValue} setValue={setSearchValue}></Search>
                <UserBlock className='sm:flex hidden gap-[20px]'/>
                <MobileNavigation/>
            </div>
            { selected != '' ? <SelectedProjectDialogs/> : <ProjectSelect includeValue={searchValue}/> }
        </div>
    )
}

export default Dialogs
