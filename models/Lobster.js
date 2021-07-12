class Lobster {
  constructor(
    name = '',
    pincers = '',
    legs = 0,
    color = '',
    size = '',
    songs = 0,
  ) {
    this.name = name;
    this.pincers = pincers
    this.legs = legs;
    this.color = color;
    this.size = size;
    this.songs = songs;
  }
  pinches(animal) {
    console.log(`${this.constructor.name} pinches ${animal}!`)
  }
  eats(food) {
    console.log(`${this.constructor.name} eats ${food}!`)
  }
}

export default Lobster;