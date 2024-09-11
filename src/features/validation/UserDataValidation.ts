import { Data, ValidationResult } from './interface'

export const validateLoginData = (data: Data): ValidationResult => {
    const { username, password } = data;
    const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|<>/?]/; //наличие спецсимволов

    if (!username || !password) {
        return { isValid: false, message: "Логин и пароль обязательны для заполнения." };
    }

    if (!isNaN(parseInt(username[0]))) {
        return { isValid: false, message: "Логин не может начинаться с цифры." };
    }

    if (username.includes(' ') || password.includes(' ')) {
        return { isValid: false, message: "Логин и пароль не может иметь пробелы." };
    }

    if (regex.test(username) || regex.test(password)) {
        return { isValid: false, message: "Логин или пароль содержит некорректные символы." };
    }

    if (username.length < 4) {
        return { isValid: false, message: "Логин должен содержать минимум 4 символа." };
    }

    if (password.length < 6) {
        return { isValid: false, message: "Пароль должен содержать минимум 6 символов." };
    }

    return { isValid: true, message: "Валидация прошла успешно." };
}