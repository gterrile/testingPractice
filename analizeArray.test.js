const analizeArray = require('./analizeArray')

test('test for average, min, max and length', () => {
  expect(analizeArray([1,2,3,4,5,6,7,8,9]))
  .toStrictEqual({average: 5, min: 1, max: 9, length: 9})
})
