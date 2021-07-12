class Iguana {
  constructor(
    name = '',
    breathes = '',
    scales = 0,
    color = '',
    horns = 0,
    enemies = 0,
  ) {
    this.name = name;
    this.breathes = breathes
    this.scales = scales;
    this.color = color;
    this.horns = horns;
    this.enemies = enemies;
  }
  Fights(animal) {
    console.log(`${this.constructor.name} used ${breathes} on ${animal}!`)
  }
  says(noise) {
    console.log(`${this.constructor.name} says ${noise}!`)
  }
}

export default Iguana;