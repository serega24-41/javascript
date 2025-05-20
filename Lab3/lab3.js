export function getDecimal(num) {
    const decimal = num - Math.floor(num);
    return parseFloat(decimal.toFixed(10));
}

/**
 * Нормализует URL
 * @param {string} url
 * @returns {string}
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
 * @param {string} str
 * @returns {boolean}
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до указанной длины, добавляя многоточие при необходимости
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку с дефисами в camelCase
 * @param {string} str
 * @returns {string}
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
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая)
 * @param {number} n
 * @returns {bigint[]}
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
 * Возвращает новый массив
 * @param {number[]} arr
 * @returns {number[]}
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений
 * @param {any[]} arr
 * @returns {any[]}
 */
export function unique(arr) {
    return [...new Set(arr)];
}
