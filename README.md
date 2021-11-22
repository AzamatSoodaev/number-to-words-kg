# number-to-words-kg
Convert a number to words on kyrgyz language.

## Install

```npm i number-to-words-kg```


## API

#### `toWords(number, [options])`

Converts a number between `-9007199254740991` and `+9007199254740991` into words.

```js
var converter = require('number-to-words-kg');

converter.toWords(13); // => "он үч сом 00 тыйын"

// Decimal numbers:
converter.toWords(2.9); // => "эки сом 90 тыйын"

// Negative numbers:
converter.toWords(-3); // => "минус үч сом 00 тыйын"

// Large numbers:
converter.toWords(9007199254740991); // => тогуз квадриллион жети триллион бир жүз токсон тогуз миллиард эки жүз элүү төрт миллион жети жүз кырк миң тогуз жүз токсон бир сом 00 тыйын

// Various currencies:
converter.toWords(123.5, { currency: 'KGS' }); // => "бир жүз жыйырма үч сом 50 тыйын"
converter.toWords(0.5, { currency: 'RUB' }); // => "ноль рубль 50 тыйын"
converter.toWords(34.5, { currency: 'USD' }); // => "отуз төрт доллар 50 тыйын"
```
