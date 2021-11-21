'use strict';

var isFinite = require('./isFinite');

test('Should return false value', function () {
    expect(isFinite(Infinity)).toBe(false);
    expect(isFinite(-Infinity)).toBe(false);
    expect(isFinite(NaN)).toBe(false);
    expect(isFinite(undefined)).toBe(false);
    expect(isFinite(null)).toBe(false);
    expect(isFinite('12345')).toBe(false);
    expect(isFinite(true)).toBe(false);
    expect(isFinite(false)).toBe(false);
    expect(isFinite({})).toBe(false);
    expect(isFinite()).toBe(false);
});

test('Should return true value', function () {
    expect(isFinite(0)).toBe(true);
    expect(isFinite(12345)).toBe(true);
    expect(isFinite(-12345)).toBe(true);
    expect(isFinite(12345.12)).toBe(true);
});

