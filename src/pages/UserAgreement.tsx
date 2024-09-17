const UserAgreement = () => {
    return(
        <div className="sm:max-w-screen-xl w-[20%] mx-auto mt-[150px] border dark:border-gray-500 rounded-lg p-4 container mx-auto ">
            <h1>Пользовательское соглашение</h1>
                <div className="">
                    <div className='flex flex-col gap-[10px]'>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>Финансовая политика</a>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>Политика конфеденциальности</a>
                    <a href='https://google.com/'
                       className='dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 duration-300'>Политика безопасности</a>
                    </div>

                </div>
        </div>
    )
}

export default UserAgreement