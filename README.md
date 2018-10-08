# intervals-merge
util for merging intervals

## Install

```
npm install intervals-merge
```

## Usage

```
const IntervalsMerge = require('intervals-merge')

console.log(IntervalsMerge.merge(['(0,1]', '(1,2]'])) // [ { min: 0, max: 2, leftOperator: '(', rightOperator: ']' } ] => (0,2]
```
