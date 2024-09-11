import { IoAdd } from 'react-icons/io5'
import { CreateProject } from '../../components/modal/CreateProject'
import { UnderscoreLink } from '../UnderscoreLink'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/redux/store'

export const ProjectEmpty = () => {
    const user = useSelector((state: RootState) => state.user);
    const [openCreate, setOpenCreate] = useState(false)

    return (
        <div className='w-full h-[300px] flex flex-col sm:gap-[50px] gap-[20px] justify-center items-center'>
            {
                user.isLoggedIn ? (
                    <>
                        <p className='font-semibold text-3xl opacity-50 sm:text-xl dark:text-gray-200 text-center'>Вы ещё не начали разработку квестовой линейки</p>
                        <p onClick={() => {
                            setOpenCreate(!openCreate)
                        }} className='font-semibold text-xl opacity-50 flex items-center gap-[10px] hover:opacity-100 transition duration-400 cursor-pointer sm:text-xl text-lg'><IoAdd /> Создать проект </p>
                        <CreateProject setOpen={setOpenCreate} open={openCreate}/>
                    </>
                ) : (
                    <p className='font-semibold sm:text-xl text-base text-center opacity-50 dark:text-gray-200'>
                        Для просмотра проектов <UnderscoreLink link='login' title='войдите'/> в аккаунт или <UnderscoreLink title='зарегистрируйтесь' link='signing'></UnderscoreLink>
                    </p>
                )
            }
        </div>
    )
}