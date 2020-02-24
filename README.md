# slsx

> A tiny utility for constructing React Native styles conditionally

This module is based on [`clsx`](https://github.com/lukeed/clsx).

This module is available in three formats:

* **ES Module**: `dist/slsx.m.js`
* **CommonJS**: `dist/slsx.js`
* **UMD**: `dist/slsx.min.js`


## Install

```
npm install --save slsx
```

or

```
yarn add slsx
```


## Usage

```js
import slsx from 'slsx';

// Your styles
const styles = StyleSheet.create({
  foo: {
    backgroundColor: 'red'
  },
  bar: {
    fontSize: 18
  },
  baz: {
    borderColor: 4
  },
  bat: {
    width: 80
  },
  qux: {
    marginVertical: 20
  },
  det: {
    paddingVertical: 10
  },
  met: {
    paddingHorizontal: 20
  }
});


// =>  =  'similar to'

slsx(styles.foo, true && styles.bar, styles.baz);
//=> [styles.foo, styles.bar, styles.baz]

slsx({ [styles.foo]: true, [styles.bar]: false, [styles.baz]: isTrue() });
//=> [styles.foo, styles.baz]

// Objects
slsx({ [styles.foo]: true }, { [styles.bar]: false }, null);
//=> [styles.foo]

// Arrays
slsx([styles.foo, null, false, styles.bar]);
//=> [styles.foo, styles.bar]

// Arrays (variadic)
slsx(
  [styles.foo], 
  ['', null, false, styles.bar], 
  [[styles.baz, [[styles.bat]]]]
);
//=> [styles.foo, styles.bar, styles.baz, styles.bat]

// Kitchen sink (with nesting)
slsx(
  styles.foo, 
  [
    1 && styles.bar, 
    { 
      [styles.baz]: false, 
      [styles.bat]: null 
    }, 
    [styles.qux, [styles.det]]
  ], 
  styles.met
);
//=> [styles.foo, styles.bar, styles.qux, styles.det, styles.met]
```

You can also [test on Codesanbox](https://codesandbox.io/s/slsx-example-mi32b)

## API

### slsx(...input)
Returns: `number[]`

#### input
Type: `Mixed`

The `slsx` function can take ***any*** number of arguments, each of which can be an Object, Array, Boolean, or String.

> **Important:** _Any_ values that cannot be transformed into numbers or are negative numbers are discarded!

```js
slsx(-123, true, false, '', null, undefined, NaN, '-77', 'bar', 'baz');
//=> ''
```

## License

MIT © [Dante Calderon](https://dantecalderon.dev)
