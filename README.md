# paginate

A simple and fast truncated pagination generator

```javascript
paginate(31, 100)
```

returns:

```javascript
// => [1, '...', 30, 31, 32, '...', 100]
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

const pagination = paginate(30, 100, 2, '_')
// => [1, '_', 28, 29, 30, 31, 32, '_', 100]
```

### Params

| Param   | Type                | Default   | Description                                   |
| ------- | ------------------- | --------- | --------------------------------------------- |
| current | <code>Number</code> | undefined | Current page                                  |
| total   | <code>Number</code> | undefined | Total pages                                   |
| delta   | <code>Number</code> | 1         | Number of pages before and after current page |
| separator   | <code>String</code> | "..."         | Separator |

### More Examples

```javascript
paginate(1, 100)
// => [1, 2, 3, '...', 100]
```

```javascript
paginate(10, 100, 2, '🐍')
// => [1, '🐍', 8, 9, 10, 11, 12, '🐍', 100]
```

```javascript
paginate(5, 50, 3)
// => [1, 2, 3, 4, 5, 6, 7, 8, '...', 50]
```

### Vue Example

```vue
<template>
  <ul>
    <li
      v-for="(page, i) in paging"
      :key="i"
      :class="{ disabled: page === '_' }"
    >
      {{ page }}
    </li>
  </ul>
</template>

<script>
import paginate from '@hazmihaz/paginate'

const makePaging = (current, total) => {
  return paginate(current, total, 2, '_')
}

export default {
  computed: {
    paging() {
      return makePaging(10, 60)
    },
  },
}
</script>

```

### React Example

```javascript
import React from 'react'
import paginate from '@hazmihaz/paginate'

class Page extends React.Component {
  render() {
    const Paging = paginate(10, 50).map(el => (
      <li>{el}</li>
    ))

    return (
      <div>
        <ul>
        {Paging}
        </ul>
      </div>
    )
  }
}
```

## Changelog

### 0.3.0
- Added separator parameter

### 0.2.0

-   Added delta parameter
-   Default delta changed from 2 to 1

## Acknowledgment

This library is based on solution by @narthur
https://gist.github.com/kottenator/9d936eb3e4e3c3e02598#gistcomment-3413141

## License

MIT
