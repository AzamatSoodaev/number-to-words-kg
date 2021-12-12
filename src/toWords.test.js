'use strict';

var toWords = require('./toWords');

test('Convert number to words', function () {
    expect(toWords(0)).toBe('Ноль сом 00 тыйын');
    expect(toWords(-0)).toBe('Ноль сом 00 тыйын');
    expect(toWords(-0.5)).toBe('Минус ноль сом 50 тыйын');
    expect(toWords('-05.5')).toBe('Минус беш сом 50 тыйын');
    expect(toWords(1)).toBe('Бир сом 00 тыйын');
    expect(toWords(12)).toBe('Он эки сом 00 тыйын');
    expect(toWords(123)).toBe('Бир жүз жыйырма үч сом 00 тыйын');
    expect(toWords(1234)).toBe('Бир миң эки жүз отуз төрт сом 00 тыйын');
    expect(toWords(12345)).toBe('Он эки миң үч жүз кырк беш сом 00 тыйын');
    expect(toWords(-91)).toBe('Минус токсон бир сом 00 тыйын');
    expect(toWords(9007199254740991)).toBe('Тогуз квадриллион жети триллион бир жүз токсон тогуз миллиард эки жүз элүү төрт миллион жети жүз кырк миң тогуз жүз токсон бир сом 00 тыйын');
});

test('Convert number to words with currency', function () {
    expect(toWords('120', { currency: "KGS" })).toBe('Бир жүз жыйырма сом 00 тыйын');
    expect(toWords('121.124', { currency: "USD" })).toBe('Бир жүз жыйырма бир доллар 12 цент');
    expect(toWords(12, { currency: "RUB" })).toBe('Он эки рубль 00 тыйын');
    expect(toWords(12, { currency: "RUf" })).toBe('Он эки сом 00 тыйын');
});

// test('Convert minus sign to word', function () {
//     expect(toWords('-120.01', { convertMinusSignToWord: false })).toBe('- бир жүз жыйырма сом 01 тыйын');
// });

test('Show currency', function () {
    expect(toWords('120.01', { showCurrency: {} })).toBe('Бир жүз жыйырма сом 01 тыйын');
    expect(toWords('120.01', { showCurrency: { integer: false, } })).toBe('Бир жүз жыйырма 01 тыйын');
    expect(toWords('120.01', { showCurrency: { fractional: false, } })).toBe('Бир жүз жыйырма сом');
    expect(toWords('120.01', { showCurrency: { integer: true, fractional: false } })).toBe('Бир жүз жыйырма сом');
    expect(toWords('120.01', { showCurrency: { integer: false, fractional: true } })).toBe('Бир жүз жыйырма 01 тыйын');
    expect(toWords('120.01', { showCurrency: { integer: false, fractional: false } })).toBe('Бир жүз жыйырма');
    expect(toWords('120.01', { showCurrency: { integer: true, fractional: true } })).toBe('Бир жүз жыйырма сом 01 тыйын');
});