'use strict';

var isSafeNumber = require('./../src/isSafeNumber');

test('not a number type', function () {
    expect(isSafeNumber(NaN)).toBe(false);
    expect(isSafeNumber(undefined)).toBe(false);
    expect(isSafeNumber(null)).toBe(false);
    expect(isSafeNumber('12345')).toBe(false);
    expect(isSafeNumber(true)).toBe(false);
    expect(isSafeNumber(false)).toBe(false);
    expect(isSafeNumber({})).toBe(false);
});

test('large numbers', function () {
    expect(isSafeNumber(Infinity)).toBe(false);
    expect(isSafeNumber(Math.pow(2, 53))).toBe(false);
    expect(isSafeNumber(Math.pow(2, 53) - 1)).toBe(true);
});

test('decimal', function () {
    expect(isSafeNumber(3.0)).toBe(true);
    expect(isSafeNumber(3.3)).toBe(true);
});

