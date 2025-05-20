function Book(title, pubYear, price) {
    // Приватные свойства
    let _title = title;
    let _pubYear = pubYear;
    let _price = price;

    // Метод show
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

const book1 = new Book('JavaScript', 2020, 1000);
book1.show();

book1.title = 'New Title';
book1.pubYear = 2023;
book1.price = 1500;
Book.compare = function(a, b) {
    return a.pubYear - b.pubYear;
};

const books = [
    new Book('Book A', 2010, 500),
    new Book('Book B', 2005, 300),
    new Book('Book C', 2020, 700)
];

books.sort(Book.compare);
console.log(books);
function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return Object.getOwnPropertySymbols(obj).length === 0;
}

const objWithSymbol = { [Symbol()]: true };
console.log(isEmpty(objWithSymbol));
console.log(isEmpty({}));
const obj = {
    className: 'open menu',
    addClass(cls) {
        if (!this.className.includes(cls)) {
            this.className += ` ${cls}`;
        }
        return this;
    },
    removeClass(cls) {
        this.className = this.className
            .split(' ')
            .filter(c => c !== cls)
            .join(' ');
        return this;
    }
};

obj.addClass('new').removeClass('open');
console.log(obj.className);
const jsonStr = JSON.stringify(obj, null, 2);
console.log(jsonStr);

const obj2 = JSON.parse(jsonStr);
console.log(JSON.stringify(obj) === JSON.stringify(obj2));
function getSecondsToday() {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - todayStart) / 1000);
}

console.log(getSecondsToday());
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}

console.log(formatDate(new Date()));