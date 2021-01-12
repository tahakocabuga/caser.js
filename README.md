# caser.js

### caser.js is a module which focuses on cases like pascal case, camel case and more.

Download: 
NPM: `npm install caser.js`

![NPM version](https://img.shields.io/npm/v/caser.js.svg)
![NPM](https://img.shields.io/npm/dm/caser.js.svg)

## Index

- [`camelCase`](#camelcase)
- [`pascalCase`](#pascalcase)
- [`kebabCase`](#kebabcase)
- [`snakeCase`](#snakecase)

### Usage

```javascript
const caser = require('caser.js');
```

#### [camelCase]()

> Code Helper

```javascript
caser.camelCase('foo bar')        -> 'fooBar'
```

#### [pascalCase]()

> Code Helper

```javascript
caser.pascalCase('foo bar')      -> 'FooBar'
```

#### [kebabCase]()

```javascript
caser.kebabCase('Foo Bar')       -> 'Foo-Bar'
caser.kebabCaseLower('Foo Bar')  -> 'foo-bar'
caser.kebabCaseUpper('Foo Bar')  -> 'FOO-BAR'
```

#### [snakeCase]()

```javascript
caser.snakeCase('Foo bar')       -> 'Foo_bar'
caser.snakeCaseLower('Foo bar')  -> 'foo_bar'
caser.snakeCaseUpper('Foo bar')  -> 'FOO_BAR'
```

##### Info

It sanitizes Turkish words such as "ş".

## Release History
* 2021-1-12 [v1.0.5]() (Added Path Case.)
* 2021-1-12 [v1.0.4]() (Fixed some bugs.)
* 2021-1-12 [v1.0.3]() (Edited README due to an old version.)
* 2021-1-12 [v1.0.2]() (Added normal kebab and snake case.)
* 2021-1-12 [v1.0.1]() (First version, not much options.)

