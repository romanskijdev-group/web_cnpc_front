import { IoMdLogIn } from 'react-icons/io'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { UnderscoreLink } from '../ui/UnderscoreLink'
import { validateLoginData } from '../features/validation/UserDataValidation'
import { useState } from 'react'

const Register = () => {
    const [isVisible, setVisible] = useState(false)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        secondPassword: ''
    })

    const [validationData, setValidationData] = useState({
        isValid: false,
        message: ''
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return(
        <div className='min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
            <div className='bg-[#F7F7F7] py-12 px-8 w-[400px] rounded-lg border flex flex-col gap-[20px]'>
                <p className='font-semibold text-2xl flex items-center gap-[10px]'>Регистрация <IoMdLogIn className='text-yellow-700'/></p>
                <div className='flex flex-col gap-[10px]'>
                    <input name='username' onChange={(e) => {
                        handleChange(e)
                    }} value={formData.username} type='text' className='bg-transparent focus:outline-none border-b w-full focus:border-yellow-700 py-2' placeholder='Ваш логин'/>
                </div>
                <div className='flex flex-col gap-[10px] relative'>
                    <input name='password' onChange={(e) => {
                        handleChange(e)
                    }} value={formData.password} type={isVisible ? 'text' : 'password'} className='bg-transparent focus:outline-none border-b w-full focus:border-yellow-700 py-2' placeholder='Ваш пароль'/>
                    <div onClick={() => {
                        setVisible(!isVisible)
                    }} className='opacity-50 hover:opacity-100 cursor-pointer transition duration-400 w-max absolute right-[10px] top-[25%]'>
                        { isVisible ? <FaRegEye/> : <FaRegEyeSlash /> }
                    </div>
                </div>
                <div className='flex flex-col gap-[10px] relative'>
                    <input name='secondPassword' onChange={(e) => {
                        handleChange(e)
                    }} value={formData.secondPassword} type={isVisible ? 'text' : 'password'} className='bg-transparent focus:outline-none border-b w-full focus:border-yellow-700 py-2' placeholder='Повторите пароль'/>
                    <div onClick={() => {
                        setVisible(!isVisible)
                    }} className='opacity-50 hover:opacity-100 cursor-pointer transition duration-400 w-max absolute right-[10px] top-[25%]'>
                        { isVisible ? <FaRegEye/> : <FaRegEyeSlash /> }
                    </div>
                </div>
                <p className='text-[12px] text-red-700'>{
                    formData.password != formData.secondPassword ? 'Пароли не совпадают' : validationData.isValid ? '' : validationData.message
                }</p>
                <button onClick={() => {
                    setValidationData(validateLoginData(formData))
                }} className='bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 text-white shadow-md px-8 py-2 rounded-lg'>Создать аккаунт</button>
                <p className='text-sm opacity-50 flex gap-[5px] mx-[auto]'>Уже зарегистрированы?
                    <UnderscoreLink link='login' title='Войти!'/>
                </p>

            </div>
        </div>
    )
}

export default Register