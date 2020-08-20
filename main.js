const Memory = require('./memory')
const mem = new Memory()

class Array {
  constructor() {
    this.length = 0 // 0, 3, 12,
    this._capacity = 0 // 0+1*3 = 3, 3+1*3 = 12, 12+1 * 3 = 39, 
    this.pointer = mem.allocate(this.length) // 0, 3
  }
  get(index){
    if(index < 0 || index > this.length) {
      throw new Error(`Index Error`)
    }
    return mem.get(this.pointer + index)
  }
  pop(){
    if (this.length === 0){
      throw new Error(`Index Error`)
    }
    const value = mem.get(this.pointer + this.length - 1)
    this.length--
    return value
  }
  add(index, value){
    if (index < 0 || index >= this.length) {
      throw new Error(`Index Error`)
    }
    if (this.length >= this._capacity){
      this._resize((this.length + 1) * Array.SIZE_RATIO)
    }
    // to, from, size
    mem.copy(this.pointer + index + 1, this.pointer + index, this.length - index)
    mem.set(this.pointer + index, value)
    this.length++
  }
  remove(index){
    if (index < 0 || index > this.length) {
      throw new Error(`Index Error`)
    }
    mem.copy(this.pointer + index, this.pointer + index, this.length - index - 1)
    this.length--
  }
  push(value) {
    if(this.length >= this._capacity){
      this._resize((this.length + 1) * Array.SIZE_RATIO)
    }
    mem.set(this.pointer + this.length, value)
    this.length++
  }

  _resize(size){
    const oldPointer = this.pointer;
    this.pointer = mem.allocate(size)
    if (this.pointer === null) {
      throw new Error(`Out of memory`)
    }
    mem.copy(this.pointer, oldPointer, this.length)
    mem.free(oldPointer)
    this._capacity = size
  }
}

Array.SIZE_RATIO = 3

function main() {
  Array.SIZE_RATIO = 3

  let arr = new Array()

  arr.push(5); // cap = 3
  arr.push(15); 
  arr.push(19); 
  arr.push(45); // cap = 12, pointer = 3
  arr.push(10); 
  arr.push(11); 
  arr.push(11);
  arr.push(11);
  arr.push(11);
  arr.push(11);
  arr.push(11);
  arr.push(11);    
  arr.push(11); // cap = 39, pointer = 15
  console.log(arr)
  console.log(arr.get(0))
  arr.remove(12)
  arr.remove(11)
  arr.remove(10)
  arr.remove(9)
  arr.remove(8)
  arr.remove(7)
  arr.remove(6)
  arr.remove(5)
  arr.remove(4)
  arr.remove(3)
  arr.remove(2)
  arr.remove(1)
  console.log(arr)
  console.log(arr.get(0))
  arr.remove(0)
  console.log(arr)
  console.log('--pushing foobar--')
  arr.push('foobar')
  console.log(arr)
  console.log('index 0: ', arr.get(0)) // NaN -- array only accepts numbers float array
  
  
}

main()