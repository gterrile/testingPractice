function analizeArray(arr) {
  return {
    average : (arr.reduce((sum, current) => sum + current, 0)) / arr.length,
    min : Math.min.apply(Math, arr),
    max : Math.max.apply(Math, arr),
    length : arr.length
  }
}

module.exports = analizeArray