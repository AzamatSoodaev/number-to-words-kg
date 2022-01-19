'use strict';

function getDecimalPart(number, round = 2) {
	var roundedNumber = Number(number).toFixed(round);
	return roundedNumber.substring(roundedNumber.indexOf(".") + 1);
}

module.exports = getDecimalPart;