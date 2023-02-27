/*
BONUS Homework:
Create a class that manages an array of items. have have a function that will splice and return from alternating sides of the array until it's empty.

EX: [1, 2, 3, 4, 5]
class.pop() => 1
class.pop() => 5
class.pop() => 2
class.pop() => 4
class.pop() => 3
class.pop() => ''
*/

class ArrayPop {
  constructor(arr) {
    this.arr = arr || []
    this._toggle = false
  }

  alternate(){
    this.toggle = !this.toggle

    if(this.toggle) {
      return this.arr.shift()
    } else {
      return this.arr.pop()
    }
  }
}

const alternating = new ArrayPop([1, 2, 3, 4, 5])

console.log(alternating.alternate())
console.log(alternating.alternate())
console.log(alternating.alternate())
console.log(alternating.alternate())
console.log(alternating.alternate())