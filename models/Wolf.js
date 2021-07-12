class Wolf {
  constructor(
    name = '',
    species = '',
    toeBeans = 0,
    fur = '',
    claws = true,
    children = 0,
  ) {
    this.name = name;
    this.species = species
    this.toeBeans = toeBeans;
    this.fur = fur;
    this.claws = claws;
    this.children = children;
  }
  plays(toys) {
    console.log(`${this.constructor.name} loves to play with his ${toys}.`)
  }
  eats(animal) {
    console.log(`${this.constructor.name} eats ${animal}!`)
  }
}

export default Wolf;