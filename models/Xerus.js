class Xerus {
  constructor(
    name = '',
    family = '',
    fingers = 0,
    fur = '',
    claws = true,
    children = 0,
  ) {
    this.name = name;
    this.family = family
    this.fingers = fingers;
    this.fur = fur;
    this.claws = claws;
    this.children = children;
  }
  eats(food) {
    console.log(`${this.constructor.name} Likes to eat ${food}.`)
  }
  feels(mood) {
    console.log(`${this.constructor.name} feels ${mood}!`)
  }
}

export default Xerus;