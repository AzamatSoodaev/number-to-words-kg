# number-to-words-kg
Convert a number to words in the Kyrgyz language.

## Install

### Install with npm:

```npm i number-to-words-kg```

### Install with yarn:

```yarn add number-to-words-kg```

## Usage

```js
var converter = require('number-to-words-kg');

converter.toWords(13); // => "Он үч сом 00 тыйын"

// Decimal numbers:
converter.toWords(2.9); // => "Эки сом 90 тыйын"

// Negative numbers:
converter.toWords(-3); // => "Минус үч сом 00 тыйын"

// Large numbers:
converter.toWords(9007199254740991); // => Тогуз квадриллион жети триллион бир жүз токсон тогуз миллиард эки жүз элүү төрт миллион жети жүз кырк миң тогуз жүз токсон бир сом 00 тыйын

// With options:
converter.toWords(123.5, { currency: 'KGS' }); // => "Бир жүз жыйырма үч сом 50 тыйын"
converter.toWords(0.5, { currency: 'RUB' }); // => "Ноль рубль 50 тыйын"
converter.toWords(34.5, {
    currency: 'USD',
	showNumberParts: {
		integer: true,
        fractional: true
	},
    showCurrency: {
        integer: true,
        fractional: true
    }
}); // => "Отуз төрт доллар 50 цент"
```

## API

### Methods

### `toWords(number, [options])`

Converts a number into words.

### Method arguments
`number (string|number)`: A number that must be converted. In Javascript, a number type may range between `-9007199254740991` and `+9007199254740991`.

### Return value
`(string)`: Returns the number converted to the text.

### Default options object
```js
{
    currency: 'KGS',
	showNumberParts: {
		integer: true,
        fractional: true
	},
    showCurrency: {
        integer: true,
        fractional: true
    },
}
```