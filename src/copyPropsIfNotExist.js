'use strict';

/**
 * Copies missed properties from defaultOptions into options object
 * @param {object} options 
 * @param {object} defaultOptions 
 */
function copyPropsIfNotExist(options, defaultOptions) {
	for (var key in defaultOptions) {
		if (!options.hasOwnProperty(key)) {
			options[key] = defaultOptions[key];
			continue;
		}
		if (typeof defaultOptions[key] === 'object') {
			copyPropsIfNotExist(options[key], defaultOptions[key]);
		}
	}
}

module.exports = copyPropsIfNotExist;