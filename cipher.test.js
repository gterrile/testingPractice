const cipher = require('./cipher')

test('a string to a 16 factor', function() {
  expect(cipher('german', 16))
  .toBe('wuhcqd')
})