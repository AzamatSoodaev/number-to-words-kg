'use strict';

var toWords = require('./toWords');

test('Convert number to words', function () {
    expect(toWords(0)).toBe('ноль сом 00 тыйын');
    expect(toWords(-0)).toBe('ноль сом 00 тыйын');
    expect(toWords(-0.5)).toBe('минус ноль сом 50 тыйын');
    expect(toWords('-05.5')).toBe('минус беш сом 50 тыйын');
    expect(toWords(1)).toBe('бир сом 00 тыйын');
    expect(toWords(12)).toBe('он эки сом 00 тыйын');
    expect(toWords(123)).toBe('бир жүз жыйырма үч сом 00 тыйын');
    expect(toWords(1234)).toBe('бир миң эки жүз отуз төрт сом 00 тыйын');
    expect(toWords(12345)).toBe('он эки миң үч жүз кырк беш сом 00 тыйын');
    expect(toWords(-91)).toBe('минус токсон бир сом 00 тыйын');
});

test('Convert number to words with currency', function () {
    expect(toWords('120', { currency: "KGS" })).toBe('бир жүз жыйырма сом 00 тыйын');
    expect(toWords('121.124', { currency: "USD" })).toBe('бир жүз жыйырма бир доллар 12 тыйын');
    expect(toWords(12, { currency: "RUB" })).toBe('он эки рубль 00 тыйын');
    expect(toWords(12, { currency: "RUf" })).toBe('он эки 00 тыйын');
});
