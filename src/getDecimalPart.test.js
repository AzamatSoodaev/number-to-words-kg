'use strict';

var getDecimalPart = require('./getDecimalPart');

test('Get decimal part of a number', function () {
    expect(getDecimalPart(10)).toBe('00');
    expect(getDecimalPart(10.0)).toBe('00');
    expect(getDecimalPart(11.1)).toBe('10');
    expect(getDecimalPart(10.00)).toBe('00');
    expect(getDecimalPart(10.05)).toBe('05');
    expect(getDecimalPart(11.111)).toBe('11');
    expect(getDecimalPart('11.11')).toBe('11');
});
