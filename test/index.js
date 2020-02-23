const test = require('tape')
const slsx = require('../dist/slsx')

test('slsx', t => {
  t.is(typeof slsx, 'function', 'exports a function')
  t.is(Array.isArray(slsx()), true, '~> returns array output')
  t.end()
})

test('number strings', t => {
  t.deepEqual(slsx(''), [])
  t.deepEqual(slsx('10'), [10])
  t.deepEqual(slsx(true && '10'), [10])
  t.deepEqual(slsx(false && '10'), [])
  t.end()
})

test('objects', t => {
  t.deepEqual(slsx({}), [])
  t.deepEqual(slsx({ 10: true }), [10])
  t.deepEqual(slsx({ 10: true, 20: false }), [10])
  t.deepEqual(slsx({ 10: 'hiya', 20: 1 }), [10, 20])
  t.deepEqual(slsx({ 10: 1, 20: 0, 30: 1 }), [10, 30])
  t.end()
})

test('objects (variadic)', t => {
  t.deepEqual(slsx({}, {}), [])
  t.deepEqual(slsx({ 10: 1 }, { 20: 2 }), [10, 20])
  t.deepEqual(slsx({ 10: 1 }, null, { 30: 1, 40: 0 }), [10, 30])
  t.deepEqual(slsx({ 10: 1 }, {}, {}, { '30': 'a' }, { 40: null, 50: Infinity }), [10, 30, 50])
  t.end()
})

test('arrays', t => {
  t.deepEqual(slsx([]), [])
  t.deepEqual(slsx(['20']), [20])
  t.deepEqual(slsx(['20', '30']), [20, 30])
  t.deepEqual(slsx(['20', 0 && '30', 1 && '50']), [20, 50])
  t.end()
})

test('arrays (nested)', t => {
  t.deepEqual(slsx([[[]]]), [])
  t.deepEqual(slsx([[['30']]]), [30])
  t.deepEqual(slsx([true, [[30]]]), [30])
  t.deepEqual(slsx(['20', ['30', ['', [[40]]]]]), [20, 30, 40])
  t.end()
})

test('functions', t => {
  const foo = () => {}
  t.deepEqual(slsx(foo, 10), [10])
  t.deepEqual(slsx(foo, 10, slsx), [10])
  t.deepEqual(slsx(foo, '40', [[slsx], '50']), [40, 50])
  t.end()
})
