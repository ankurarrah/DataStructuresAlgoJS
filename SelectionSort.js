//https://www.geeksforgeeks.org/merge-sort

var array = [1,4,2,3];

const _mergeArrays = (a, b) => {
    const c = []
    while (a.length && b.length) {
      c.push(a[0] > b[0] ? b.shift() : a.shift())
    }
    //if we still have values, let's add them at the end of `c`
    while (a.length) {
      c.push(a.shift())
    }
    while (b.length) {
      c.push(b.shift())
    }
  
    return c
  }

  const _mergeSort = (a) => {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const a_l = a.slice(0, middle)
    const a_r = a.slice(middle, a.length)
    const sorted_l = _mergeSort(a_l)
    const sorted_r = _mergeSort(a_r)
    return _mergeArrays(sorted_l, sorted_r)
  }
console.log(_mergeSort([1,4,2,3]));