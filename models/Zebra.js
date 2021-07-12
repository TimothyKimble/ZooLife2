class Zebra {
  constructor(
    name = '',
    age = '',
    stripes = 0,
    height = '',
    alive = true,
    children = 0,
  ) {
    this.name = name;
    this.age = age
    this.stripes = stripes;
    this.height = height;
    this.alive = alive;
    this.children = children;
  }
  run(distance) {
    console.log(`${this.constructor.name} ran ${distance} miles today.`)
  }
  feels(mood) {
    console.log(`${this.constructor.name} feels ${mood}!`)
  }
}

export default Zebra;