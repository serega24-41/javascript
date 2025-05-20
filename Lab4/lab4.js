// Все предыдущие функции (getDecimal, normalizeUrl и т.д.)...

// Конструктор Book
function Book(title, pubYear, price) {
    let _title = title;
    let _pubYear = pubYear;
    let _price = price;

    this.show = function() {
        console.log(`Название: ${_title}, Цена: ${_price}`);
    };

    Object.defineProperties(this, {
        title: {
            get() { return _title; },
            set(value) {
                if (typeof value === 'string' && value.trim() !== '') {
                    _title = value;
                } else {
                    throw new Error('Название не может быть пустым');
                }
            }
        },
        pubYear: {
            get() { return _pubYear; },
            set(value) {
                if (typeof value === 'number' && value > 0) {
                    _pubYear = value;
                } else {
                    throw new Error('Год публикации должен быть положительным числом');
                }
            }
        },
        price: {
            get() { return _price; },
            set(value) {
                if (typeof value === 'number' && value > 0) {
                    _price = value;
                } else {
                    throw new Error('Цена должна быть положительным числом');
                }
            }
        }
    });
}

Book.compare = function(a, b) {
    return a.pubYear - b.pubYear;
};

function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return Object.getOwnPropertySymbols(obj).length === 0;
}

function getSecondsToday() {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - todayStart) / 1000);
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}

export {
    getDecimal,
    normalizeUrl,
    checkSpam,
    truncate,
    camelize,
    fibs,
    arrReverseSorted,
    unique,
    Book,
    isEmpty,
    getSecondsToday,
    formatDate
};
