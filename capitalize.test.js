const capitalize = require('./capitalize')

test('first letter of string capitalized', () => {
  expect(capitalize('word')).toBe('Word')
})

test('first char not letter should return null', () => {
  expect(capitalize('#abc')).toBe(null)
})