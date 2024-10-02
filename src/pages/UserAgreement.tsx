const UserAgreement = () => {
    return (
      <div className="flex flex-col h-[100vh] bg-gray-100 dark:bg-gray-900">
  
        <div className="flex flex-col flex-1">
          <header className="bg-white dark:bg-gray-800">
            <div className="container mx-auto py-4 px-6">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Пользовательское соглашение
              </h1>
            </div>
          </header>
  
          <div className="container mx-auto py-8 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sticky top-16">
                <nav className="flex flex-col gap-4">
                  <a
                    href="https://google.com/"
                    className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200 duration-300"
                  >
                    Финансовая политика
                  </a>
  
                  <a
                    href="https://google.com/"
                    className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200 duration-300"
                  >
                    Политика конфиденциальности
                  </a>
  
                  <a
                    href="https://google.com/"
                    className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200 duration-300"
                  >
                    Политика безопасности
                  </a>
                </nav>
              </div>
  
              <div className="col-span-2">
                <div className="prose dark:prose-invert max-w-none rounded-lg bg-white dark:bg-gray-800 p-4 shadow-lg">
  
                  <p>
                    1. Общие положения
                  </p>
  
                  <p>
                    Настоящее Пользовательское соглашение (далее – Соглашение)
                    определяет условия использования Сервиса [название сервиса],
                    предоставляемого [название компании] (далее – Компания). 
                  </p>
  
                  <p>
                    1.1. Сервис предоставляется на условиях "как есть" и "как
                    доступно", без каких-либо гарантий, явных или подразумеваемых.
                    Компания не гарантирует, что Сервис будет соответствовать вашим
                    требованиям, будет работать без сбоев, своевременно, безопасно
                    или без ошибок. 
                  </p>
  
                  <p>
                    1.2. Компания не несет ответственности за любые убытки,
                    возникшие в связи с использованием или невозможностью использования
                    Сервиса, включая, но не ограничиваясь, прямые, косвенные,
                    случайные, штрафные убытки или упущенную выгоду, даже если
                    Компания была уведомлена о возможности таких убытков.
                  </p>
  
                  <p>
                     2. Права и обязанности Пользователя
                  </p>
  
                  <p>
                    2.1. Пользователь обязуется:
                  </p>
  
                  <ul>
                    <li>
                      Не нарушать законодательство Российской Федерации и
                      международные правовые нормы.
                    </li>
                    <li>
                      Не использовать Сервис для распространения вредоносных
                      программ.
                    </li>
                    <li>
                      Не создавать учетные записи с использованием чужих данных или
                      без надлежащего разрешения.
                    </li>
                    <li>
                      Не нарушать права интеллектуальной собственности третьих лиц.
                    </li>
                  </ul>
  
                  <p>
                    2.2. Пользователь имеет право:
                  </p>
  
                  <ul>
                    <li>
                      Использовать Сервис в соответствии с настоящим Соглашением.
                    </li>
                    <li>
                      Обращаться в службу поддержки Компании по вопросам
                      использования Сервиса.
                    </li>
                  </ul>
  
                  <p>
                    3. Изменения Соглашения
                  </p>
  
                  <p>
                    Компания вправе вносить изменения в настоящее Соглашение в
                    одностороннем порядке без предварительного уведомления
                    Пользователя. Новая редакция Соглашения вступает в силу с момента
                    ее публикации на сайте [название сервиса]. 
                  </p>
  
                  <p>
                    4. Контактная информация
                  </p>
  
                  <p>
                    [Контактная информация компании]
                  </p>
  
                  <p>
                    5. Применимое право
                  </p>
  
                  <p>
                    Настоящее Соглашение регулируется и толкуется в соответствии с
                    законодательством Российской Федерации. 
                  </p>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserAgreement;
  
  