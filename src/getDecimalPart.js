'use strict';

function getDecimalPart(number) {
    var integer = Math.floor(number).toString();
    var numberAsString = number.toString();
    if (integer.length === numberAsString.length)   // numbers are identical; no decimal part
        return '00';
    var decimalPart = numberAsString.substring(integer.length + 1); // return everything to the right of the decimal marker
    if (decimalPart.length < 2) {
        return decimalPart + '0';
    } else {
        return decimalPart.substring(0, 2);
    }
}

module.exports = getDecimalPart;