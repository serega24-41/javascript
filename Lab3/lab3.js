/**
 * Возвращает дробную часть числа
 * @param {number} num - Исходное число
 * @returns {number} Дробная часть числа
 */
export function getDecimal(num) {
    const decimal = num - Math.floor(num);
    return parseFloat(decimal.toFixed(10)); // Фиксим проблему с плавающей точкой
}

/**
 * Нормализует URL, добавляя https:// в начало при необходимости
 * @param {string} url - Исходный URL
 * @returns {string} Нормализованный URL
 */
export function normalizeUrl(url) {
    if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    }
    if (url.startsWith('https://')) {
        return url;
    }
    return 'https://' + url;
}

/**
 * Проверяет строку на наличие спама (viagra или XXX)
 * @param {string} str - Проверяемая строка
 * @returns {boolean} true, если найден спам
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до указанной длины, добавляя многоточие при необходимости
 * @param {string} str - Исходная строка
 * @param {number} maxlength - Максимальная длина строки
 * @returns {string} Усеченная строка
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку с дефисами в camelCase
 * @param {string} str - Исходная строка
 * @returns {string} Строка в camelCase
 */
export function camelize(str) {
    return str.split(/[-_]+/).map((word, index) => {
        if (index === 0) {
            return word;
        }
        return ucFirst(word);
    }).join('');
}

/**
 * Преобразует первую букву строки в верхний регистр
 * @param {string} str - Исходная строка
 * @returns {string} Строка с первой заглавной буквой
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая)
 * @param {number} n - Количество чисел Фибоначчи
 * @returns {bigint[]} Массив чисел Фибоначчи
 */
export function fibs(n) {
    if (n <= 0) return [];
    const result = [0n, 1n];
    for (let i = 2; i < n; i++) {
        result.push(result[i-1] + result[i-2]);
    }
    return result.slice(0, n);
}

/**
 * Возвращает новый массив, отсортированный по убыванию
 * @param {number[]} arr - Исходный массив
 * @returns {number[]} Новый массив, отсортированный по убыванию
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений
 * @param {any[]} arr - Исходный массив
 * @returns {any[]} Массив уникальных значений
 */
export function unique(arr) {
    return [...new Set(arr)];
}
