class Tiger {
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
  hunt(animal) {
    console.log(`${this.constructor.name} is hunting ${animal}`)
  }
  feels(mood) {
    console.log(`${this.constructor.name} feels ${mood}!`)
  }
}

export default Tiger;