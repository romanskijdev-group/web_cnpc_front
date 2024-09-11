import { ValidationResult } from './interface'

export const validateProjectData = (data: { title: string; version: string }): ValidationResult => {
    const { title, version } = data;
    const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|<>/?]/; //наличие спецсимволов

    if (!title || !version) {
        return { isValid: false, message: "Поля названия и версии обязательны для заполнения." };
    }

    if (title.length > 20) {
        return { isValid: false, message: "Название не должно содержать более 20 символов" };
    }

    if (title.includes(' ')) {
        return { isValid: false, message: "Название не может содержать пробелов." };
    }

    if (regex.test(title)) {
        return { isValid: false, message: "Название содержит некорректные символы." };
    }

    return { isValid: true, message: "Валидация прошла успешно." };
}
