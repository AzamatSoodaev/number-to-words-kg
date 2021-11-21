'use strict';

var toWords = require('./toWords');

test('Convert number to words', function () {
    expect(toWords(0)).toBe('ноль');
    expect(toWords(-0)).toBe('ноль');
    expect(toWords(1)).toBe('бир');
    expect(toWords(12)).toBe('он эки');
    expect(toWords(123)).toBe('бир жүз жыйырма үч');
    expect(toWords(1234)).toBe('бир миң эки жүз отуз төрт');
    expect(toWords(-91)).toBe('минус токсон бир');
});

test('Convert number to words with currency', function () {
    expect(toWords('120', { currency: "KGS" })).toBe('бир жүз жыйырма сом 00 тыйын');
    expect(toWords('121.124', { currency: "USD" })).toBe('бир жүз жыйырма бир доллар 12 тыйын');
    expect(toWords(12, { currency: "RUB" })).toBe('он эки рубль 00 тыйын');
    expect(toWords(12, { currency: "RUf" })).toBe('он эки');
});
