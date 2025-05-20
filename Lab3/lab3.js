/**
 * Возвращает дробную часть числа.
 * @param {number} num - Число, из которого извлекается дробная часть.
 * @returns {number} Дробная часть числа (от 0 до 1).
 */
export function getDecimal(num) {
    const decimal = Math.abs(num) % 1;
    return num >= 0 ? decimal : 1 - decimal;
}

/**
 * Нормализует URL, добавляя 'https://' в начало, если его нет.
 * @param {string} url - URL для нормализации.
 * @returns {string} Нормализованный URL с 'https://'.
 */
export function normalizeUrl(url) {
    const prefixes = ['http://', 'https://'];
    for (const prefix of prefixes) {
        if (url.startsWith(prefix)) {
            return 'https://' + url.slice(prefix.length);
        }
    }
    return 'https://' + url;
}

/**
 * Проверяет строку на наличие подстрок 'viagra' или 'XXX' (без учёта регистра).
 * @param {string} str - Строка для проверки.
 * @returns {boolean} true, если найдены запрещённые подстроки, иначе false.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до указанной длины, добавляя многоточие при необходимости.
 * @param {string} str - Строка для усечения.
 * @param {number} maxlength - Максимальная длина строки.
 * @returns {string} Усечённая строка (если требуется).
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку с дефисами в camelCase.
 * @param {string} str - Строка для преобразования.
 * @returns {string} Строка в camelCase.
 */
export function camelize(str) {
    return str.split('-').map((word, index) => {
        if (index === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая его).
 * @param {number} n - Количество чисел Фибоначчи.
 * @returns {bigint[]} Массив чисел Фибоначчи.
 */
export function fibs(n) {
    if (n <= 0) return [];
    const result = [0n, 1n];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result.slice(0, n);
}

/**
 * Возвращает новый массив, отсортированный по убыванию.
 * @param {number[]} arr - Исходный массив.
 * @returns {number[]} Отсортированный массив.
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений.
 * @param {Array} arr - Исходный массив.
 * @returns {Array} Массив уникальных значений.
 */
export function unique(arr) {
    return [...new Set(arr)];
}
