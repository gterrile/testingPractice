const reverse = require('./reverse')

test('string reads backwards', () => {
  expect(reverse('german')).toBe('namreg')
})

