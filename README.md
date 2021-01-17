#  paginate 0.1.0

A simple and fast pagination generator

##  Instalation

```sh-session
npm i @hazmihaz/paginate
```
or
```sh-session
yarn add @hazmihaz/paginate
```

##  Usage

```javascript
import  paginate  from  'paginate'

const pagination = paginate(31,  99)
// => [1, '...', 29, 30, 31, 32, 33, '...', 99]
```

###  Params

| Param     | Type                  | Description                   |
| --------- | --------------------- | ----------------------------- |
| current   | <code>Number</code>   | Current page                  |
| total     | <code>Number</code>   | Total pages                   |


##  Acknowledgment

This library is based on solution by @narthur
  https://gist.github.com/kottenator/9d936eb3e4e3c3e02598#gistcomment-3413141


##  License

MIT
