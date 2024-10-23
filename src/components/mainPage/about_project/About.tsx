import { LuCrown } from "react-icons/lu";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import { FaFileImport } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { FaTools } from "react-icons/fa";


export const About = () => {
    return(
        <div id='about' className='flex flex-col gap-[8px] sm:max-w-screen-xl w-[90%] mx-auto mt-[150px] border dark:border-gray-500 rounded-lg p-4' data-aos='fade-up'>
                <h1 className='text-2xl font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white text-center '>Что это за проект?</h1>
                <div className='flex flex-col gap-[8px] dark:text-gray-300 text-gray-700'>
                    <h2> Устали от скучных NPC на серверах Minecraft? Создайте свой мир, полный приключений!</h2>
                    <p>Добро пожаловать на QuestHolder — платформу для совместного создания увлекательных квестов для CustomNPC в Minecraft!</p>
                    <p>👑 Превращайте бездушных болванчиков в харизматичных героев.
                    Добавляте им уникальные диалоги, прописывайте ветвящиеся сюжетные линии и создавайте свой уникальный сюжет.</p>
                    <p>🚀 Воплощайте в жизнь все самые невероятные идеи!
                    От запутанных сюжетов до эпических похождений — на QuestHolder имеются все нужные инструменты для создания неповторимого игрового опыта.</p>
                    <p>🤝 Творите вместе с друзьями!
                    Приглашайте единомышленников, работайте над квестами совместно с командой и делитесь своими творениями с сообществом!</p>

                    <p>QuestHolder предлагает Вам:</p>
                    <p>Удобный визуальный редактор для создания диалогов и квестов без необходимости программирования.</p>
                    <p>Возможность импорта и экспорта квестов для легкого обмена с другими пользователями.</p>
                    <p>Активное и дружелюбное сообщество, готовое помочь советом и поделиться опытом.</p>
                    <p>Превратите свой Minecraft сервер в мир захватывающих дух историй! Зарегистрируйтесь на QuestHolder и начните создавать свои квесты уже сегодня!</p>
            </div>
        </div>

    )
}