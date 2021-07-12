

class Beaver {
  constructor(
    name = '',
    fur = '',
    gender = '',
    size = 0,
    chuby = true,
    tailLengthInch = 0,
  ) {
    this.name = name;
    this.fur = fur;
    this.gender = gender;
    this.size = size;
    this.chuby = chuby;
    this.tailLengthInch = tailLengthInch;
  }
  chew(wood) {
    console.log(`Bite that ${wood}!`)
  }
  yell(sound) {
    alert(`${this.constructor.name} says ${sound}!`)
  }
}

export default Beaver;