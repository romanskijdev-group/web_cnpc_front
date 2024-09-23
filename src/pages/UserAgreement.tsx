const UserAgreement = () => {
    return(
        <div className="flex w-[90%] h-[100vh] mx-auto">
            <div className="w-64"> 
                <div className="p-4">
                    <h1 className="text-xl text-gray-800 dark:text-white mb-4 ">Пользовательское соглашение</h1>
                </div>
                
                <nav className="flex flex-col gap-4 px-4 py-2">
                    <a href="https://google.com/" className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200 duration-300"> Финансовая политика </a>
                    <a href="https://google.com/" className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200 duration-300"> Политика конфеденциальности </a>
                    <a href="https://google.com/" className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200 duration-300"> Политика безопасности
                    </a>
                </nav>
            </div>
        
            <div className="flex-1 p-4 ">
                <div className="sm:max-w-screen-xl border dark:border-gray-500 rounded-lg p-4 container">
                    <div className="prose dark:prose-invert">
                        <p> Текст</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserAgreement

