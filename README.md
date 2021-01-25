# paginate

A simple and fast pagination generator

```javascript
paginate(31, 100, 2)
```

returns:

```javascript
// => [1, '...', 29, 30, 31, 32, 33, '...', 100]
```

## Installation

```sh-session
npm i @hazmihaz/paginate
```

or

```sh-session
yarn add @hazmihaz/paginate
```

## Usage

```javascript
import paginate from 'paginate'

const pagination = paginate(30, 100)
// => [1, '...', 29, 30, 31, '...', 100]
```

```javascript
paginate(1, 100)
// => [1, 2, 3, '...', 100]
```

```javascript
paginate(10, 100, 2)
// => [1, '...', 8, 9, 10, 11, 12, '...', 100]
```

```javascript
paginate(5, 50, 3)
// => [1, 2, 3, 4, 5, 6, 7, 8, '...', 50]
```

### Params

| Param   | Type                | Default   | Description                                   |
| ------- | ------------------- | --------- | --------------------------------------------- |
| current | <code>Number</code> | undefined | Current page                                  |
| total   | <code>Number</code> | undefined | Total pages                                   |
| delta   | <code>Number</code> | 1         | Number of pages before and after current page |

## Changelog

### 0.2.0

-   Added delta parameter
-   Default delta changed from 2 to 1

## Acknowledgment

This library is based on solution by @narthur
https://gist.github.com/kottenator/9d936eb3e4e3c3e02598#gistcomment-3413141

## License

MIT
