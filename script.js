
function analizeArray(arr) {
  return {
    'total': arr.reduce((sum, current) => sum + current, 0),
    'average': (arr.reduce((sum, current) => sum + current, 0)) / arr.length,
    'min': Math.min.apply(Math, arr),
    'max': Math.max.apply(Math, arr),
    'length': arr.length
  }
}

let newArray = [1,2,3,4,5,6,7,8,9]
console.log(analizeArray(newArray))


