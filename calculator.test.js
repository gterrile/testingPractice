const calculator = require('./calculator')

test('adding two numbers', () => {
  let newCalculator = new calculator
  expect(newCalculator.add(1, 2))
  .toBe(3)
})

test('subtracting two numbers', () => {
  let newCalculator = new calculator
  expect(newCalculator.subtract(1, 2))
  .toBe(-1)
})

test('multiplying two numbers', () => {
  let newCalculator = new calculator
  expect(newCalculator.multiply(3, 4))
  .toBe(12)
})

