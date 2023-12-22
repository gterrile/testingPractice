function capitalize(str) {
  if (str[0].match(/[a-z]/i)) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return null
}

module.exports = capitalize
