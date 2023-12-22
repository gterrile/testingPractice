function reverse(str) {
  let reversed = ''
  let index = 0
  for (let i = (str.length - 1); i >= 0; i--) {
    reversed = reversed + str[i]
    index += 1
  }
  return reversed
}

module.exports = reverse