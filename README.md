# intervals-merge
util for merging intervals

## Install

```
npm install intervals-merge
```

## Usage

### parse a interval

We express a interval as

'(a, b)' => 'a < x < b'

'[a, b]' => 'a <= x <= b'

'[a, b)' => 'a <= x < b'

'(a, b]' => 'a < x <= b'

Use `parseInterval`, you can parse a interval to an object, for example:

```
const IntervalsMerge = require('intervals-merge')
IntervalsMerge.parseInterval('(0, 1]') // { min: 0, max: 1, leftOperator: '(', rightOperator: ']' }
```

### merge intervals

You can use `IntervalsMerge.merge` to merge intervals that expressed as object, or combine `IntervalsMerge.parseInterval` and `IntervalsMerge.merge` to merge intervals that expressed as brackets.

```
const IntervalsMerge = require('intervals-merge')

console.log(IntervalsMerge.merge(['(0,1]', '(1,2]'].map(interval => IntervalsMerge.parseInterval(interval))))
```
