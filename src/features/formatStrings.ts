export function formatString({number}: { number: number }) {
    // Вычисляем остаток от деления на 10 и на 100
    const remainder10 = number % 10;
    const remainder100 = number % 100;

    // Правила для склонения слова "элемент"
    if (remainder10 === 1 && remainder100 !== 11) {
        return `${number} элемент`;
    } else if (remainder10 >= 2 && remainder10 <= 4 && (remainder100 < 10 || remainder100 >= 20)) {
        return `${number} элемента`;
    } else {
        return `${number} элементов`;
    }
}

