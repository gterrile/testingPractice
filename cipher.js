function cipher(string, factor) {
  let ciphedString = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z]/)) {
      let characterCode = string.charCodeAt(i)
      // offset of 97 to wrap from z to a
      let ciphedCharacterCode = (((characterCode + factor) - 97) % 26) + 97
      console.log({characterCode}, {ciphedCharacterCode})
      ciphedString = ciphedString + String.fromCharCode(ciphedCharacterCode)
    } else {
      ciphedString = ciphedString + string[i]
    }
  }
  return ciphedString
}

module.exports = cipher