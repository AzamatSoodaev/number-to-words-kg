# number-to-words-kg
Convert a number to words on kyrgyz language.

## Install

```npm i number-to-words-kg```


## API

#### `toWords(number, [options])`

Converts a number between `-9007199254740991` and `+9007199254740991` into words.

```js
var converter = require('number-to-words-kg');

converter.toWords(13); // => "Он үч сом 00 тыйын"

// Decimal numbers:
converter.toWords(2.9); // => "Эки сом 90 тыйын"

// Negative numbers:
converter.toWords(-3); // => "Минус үч сом 00 тыйын"

// Large numbers:
converter.toWords(9007199254740991); // => Тогуз квадриллион жети триллион бир жүз токсон тогуз миллиард эки жүз элүү төрт миллион жети жүз кырк миң тогуз жүз токсон бир сом 00 тыйын

// Various currencies:
converter.toWords(123.5, { currency: 'KGS' }); // => "Бир жүз жыйырма үч сом 50 тыйын"
converter.toWords(0.5, { currency: 'RUB' }); // => "Ноль рубль 50 тыйын"
converter.toWords(34.5, { currency: 'USD' }); // => "Отуз төрт доллар 50 цент"
```
