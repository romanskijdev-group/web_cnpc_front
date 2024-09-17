import { Data, ValidationResult } from './interface'

export const validateLoginData = (data: Data): ValidationResult => {
    const { username } = data;
    const regex = /[!#$%^&*()_+\-=[\]{};':"\\|<>/?]/; //наличие спецсимволов
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username) {
        return { isValid: false, message: "Email обязателен для заполнения." };
    }

    if (!isNaN(parseInt(username[0]))) {
        return { isValid: false, message: "Email не может начинаться с цифры." };
    }

    if (username.includes(' ')) {
        return { isValid: false, message: "Email не может иметь пробелы." };
    }

    if (regex.test(username)) {
        return { isValid: false, message: "Email содержит некорректные символы." };
    }

    if (!emailRegex.test(username)) {
        return { isValid: false, message: "Некорректный Email." };
    }

    return { isValid: true, message: "Валидация прошла успешно." };
}