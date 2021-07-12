class Jellyfish {
  constructor(
    name = '',
    swims = '',
    tenticles = 0,
    color = '',
    shape = '',
    age = 0,
  ) {
    this.name = name;
    this.swims = swims
    this.tenticles = tenticles;
    this.color = color;
    this.shape = shape;
    this.age = age;
  }
  eats(food) {
    console.log(`${this.constructor.name} eats ${food}!`)
  }
  says(noise) {
    console.log(`${this.constructor.name} says ${noise}!`)
  }
}

export default Jellyfish;