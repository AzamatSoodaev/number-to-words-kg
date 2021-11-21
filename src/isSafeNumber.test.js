'use strict';

var isSafeNumber = require('./isSafeNumber');

test('Should return false value', function () {
    expect(isSafeNumber(Infinity)).toBe(false);
    expect(isSafeNumber(-Infinity)).toBe(false);
    expect(isSafeNumber(NaN)).toBe(false);
    expect(isSafeNumber(undefined)).toBe(false);
    expect(isSafeNumber(null)).toBe(false);
    expect(isSafeNumber('12345')).toBe(false);
    expect(isSafeNumber(true)).toBe(false);
    expect(isSafeNumber(false)).toBe(false);
    expect(isSafeNumber({})).toBe(false);
    expect(isSafeNumber()).toBe(false);
    expect(isSafeNumber(9007199254740992)).toBe(false);
    expect(isSafeNumber(-9007199254740992)).toBe(false);
});

test('Should return true value', function () {
    expect(isSafeNumber(9007199254740991)).toBe(true);
    expect(isSafeNumber(-9007199254740991)).toBe(true);
});

