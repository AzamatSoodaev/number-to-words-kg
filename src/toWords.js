'use strict';

var isFinite = require('./isFinite');
var isSafeNumber = require('./isSafeNumber');
var getDecimalPart = require('./getDecimalPart');

var TEN = 10;
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1000;
var ONE_MILLION = 1000000;
var ONE_BILLION = 1000000000;           //         1.000.000.000 (9)
var ONE_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
var ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
var MAX = 9007199254740992;             // 9.007.199.254.740.992 (15)

var LESS_THAN_TEN = [
    "ноль", "бир", "эки", "үч", "төрт", "беш", "алты", "жети", "сегиз", "тогуз"
];

var TENTHS_LESS_THAN_HUNDRED = [
    "ноль", "он", "жыйырма", "отуз", "кырк", "элүү", "алтымыш", "жетимиш", "сексен", "токсон"
];

var currencies = {
    'USD': 'доллар',
    'RUB': 'рубль',
    'KGS': 'сом'
};

/**
 * Converts an integer into words.
 * If number is decimal, the decimals will be removed.
 * @example toWords(12) => 'он эки'
 * @param {number|string} number
 * @returns {string}
 */
function toWords(number, options) {
    var words;
    var num = parseInt(number, 10);
    var decimalPart = getDecimalPart(number);

    if (!isFinite(num)) {
        throw new TypeError(
            'Not a finite number: ' + number + ' (' + typeof number + ')'
        );
    }
    if (!isSafeNumber(num)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }
    words = generateWords(num);

    if (options && typeof options.currency === 'string') {
        if (options.currency in currencies) {
            words += ' ' + currencies[options.currency] + ' ' + decimalPart + ' тыйын';
        }
    }

    return words;
}

function generateWords(number) {
    var remainder, word,
        words = arguments[1];

    // We’re done
    if (number === 0) {
        return !words ? 'ноль' : words.join(' ').replace(/,$/, '');
    }
    // First run
    if (!words) {
        words = [];
    }
    // If negative, prepend “minus”
    if (number < 0) {
        words.push('минус');
        number = Math.abs(number);
    }

    if (number < TEN) {
        remainder = 0;
        word = LESS_THAN_TEN[number];

    } else if (number < ONE_HUNDRED) {
        remainder = number % TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += ' ' + LESS_THAN_TEN[remainder];
            remainder = 0;
        }

    } else if (number < ONE_THOUSAND) {
        remainder = number % ONE_HUNDRED;
        word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' жүз';

    } else if (number < ONE_MILLION) {
        remainder = number % ONE_THOUSAND;
        word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' миң';

    } else if (number < ONE_BILLION) {
        remainder = number % ONE_MILLION;
        word = generateWords(Math.floor(number / ONE_MILLION)) + ' миллион';

    } else if (number < ONE_TRILLION) {
        remainder = number % ONE_BILLION;
        word = generateWords(Math.floor(number / ONE_BILLION)) + ' миллиард';

    } else if (number < ONE_QUADRILLION) {
        remainder = number % ONE_TRILLION;
        word = generateWords(Math.floor(number / ONE_TRILLION)) + ' триллион';

    } else if (number <= MAX) {
        remainder = number % ONE_QUADRILLION;
        word = generateWords(Math.floor(number / ONE_QUADRILLION)) +
            ' квадриллион';
    }

    words.push(word);
    return generateWords(remainder, words);
}

module.exports = toWords;