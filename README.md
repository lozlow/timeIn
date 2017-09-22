## timeTo

A tiny utility to convert time to another unit

#### Installation

```
$ npm install timeto
```

#### Usage

Supported time units:
- y  - Year (defined as 365.25 days)
- d  - Day
- h  - Hours
- m  - Minutes
- s  - Seconds
- ms - Milliseconds

```js
timeTo(
  '1d12h', // a string for the input time
  'ms'     // output value for the time period (defaults to ms)
)
```

Returns a number that is the input time duration in terms of the output time unit specified

#### Example

```js
const timeTo = require('timeto')

const msValue = timeTo('1d12h' /* 1 day 12 hours */, 'ms')

console.log(msValue) // 129600000
```

#### Additional notes

- Time units must be lowercase
- Months are not supported since they fluctuate in duration
