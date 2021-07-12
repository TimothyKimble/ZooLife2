class Goat {
  constructor(
    name = '',
    size = '',
    horns = 0,
    fur = '',
    smells = '',
    children = 0,
  ) {
    this.name = name;
    this.size = size
    this.horns = horns;
    this.fur = fur;
    this.smells = smells;
    this.children = children;
  }
  feed(plant) {
    console.log(`${this.constructor.name} is eating ${plant}`)
  }
  feels(mood) {
    console.log(`${this.constructor.name} feels ${mood}!`)
  }
}

export default Goat;