# X-Case

### X-Case is a module which focuses on cases like pascal case, camel case and more.

Download: 
NPM: `npm install x-case`

[![NPM version](https://img.shields.io/npm/v/x-case.svg)]
[![NPM](https://img.shields.io/npm/dm/x-case.svg)]

```javascript
const xcase = require('x-case');

xcase.snakeCaseLower('Foo bar')   -> 'foo_bar'
xcase.snakeCaseUpper('Foo bar')   -> 'FOO_BAR'
xcase.pascalCase('foo bar')   -> 'FooBar'
xcase.camelCase('foo bar')   -> 'fooBar'
xcase.kebabCaseLower('Foo Bar')  -> 'foo-bar'
xcase.kebabCaseUpper('Foo Bar')  -> 'FOO-BAR'
```

## Release History
* 2020-12-15 [v1.0.0][] (First version, not much options.)# x-case
