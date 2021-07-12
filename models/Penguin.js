class Penguin {
  constructor(
    name = '',
    size = '',
    fins = 0,
    species = '',
    beak = '',
    smooth = true,
  ) {
    this.name = name;
    this.size = size
    this.fins = fins;
    this.species = species;
    this.beak = beak;
    this.smooth = smooth;
  }
  slides(distance) {
    console.log(`${this.constructor.name} slid ${distance} .`)
  }
  says(noise) {
    console.log(`${this.constructor.name} screams ${noise}!`)
  }
}

export default Penguin;