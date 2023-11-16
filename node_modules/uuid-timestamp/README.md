# uuid-timestamp
> UUID v4 based on timestamp (non-standard algorithm)

- Valid UUID version 4
- Built in timestamp in nanoseconds
- Absolute uniqueness within your ecosystem
- Super easy and fast

## Install
```
$ npm install uuid-timestamp
```

## Usage
#### Emitting UUID
Emit valid UUID v4 with nanosecond timestamp
```js
const { uuidEmit } = require('uuid-timestamp');
const uuid = uuidEmit();
console.log(`Your new UUID v4 is: ${uuid}`);

// Your new UUID v4 is: 15972459-4799-4612-a723-231092612723
```
#### Parsing UUID timestamp
Parse UUID and get it's timestamp in milliseconds or nanoseconds
```js
const { uuidParse, uuidParseNano } = require('uuid-timestamp');
const timestamp = uuidParse(uuid);
console.log(timestamp);
console.log(`UUID created at ${new Date(timestamp).toUTCString()}`);

// 1597245947996
// UUID created at Wed, 12 Aug 2020 15:25:47 GMT

console.log(uuidParseNano(uuid));

// 1597245947996127232n
```
#### Get current nanosecond timestamp
Additional method to get current nanosecond timestamp from system time and `process.hrtime.bigint()` diff
```js
const { nanoTime } = require('uuid-timestamp');
console.log(nanoTime());

// 1597246608194080627n
```

## API
### uuidEmit()
#### returns
Type: `String`  
The function returns a valid UUID v4.

### uuidParse(uuid)
#### uuid
Type: `String`  
Previously generated UUID.

#### returns
Type: `Number`  
The function returns a timestamp in milliseconds, parsed from UUID.

### uuidParseNano(uuid)
#### uuid
Type: `String`  
Previously generated UUID.

#### returns
Type: `BigInt`  
The function returns a timestamp in nanoseconds, parsed from UUID.

### nanoTime()
#### returns
Type: `BigInt`  
The function returns current nanosecond timestamp from system time and `process.hrtime.bigint()` diff.

## Benchmarks
A comparative performance test based on discussion thread on [stackoverflow](https://stackoverflow.com/questions/105034/how-to-create-guid-uuid/). You can run the test and see the results on [jsben.ch](https://jsben.ch/bvtX3) (browser version uses millisecond timestamp instead of the nanosecond Node.js version, so there may be some performance fluctuations)
