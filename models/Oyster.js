class Oyster {
  constructor(
    name = '',
    size = '',
    pearls = 0,
    color = '',
    shape = '',
    slimey = true,
  ) {
    this.name = name;
    this.size = size
    this.pearls = pearls;
    this.color = color;
    this.shape = shape;
    this.slimey = slimey;
  }
  floats(distance) {
    console.log(`${this.constructor.name} moved ${distance} .`)
  }
  says(noise) {
    console.log(`${this.constructor.name} calls ${noise}!`)
  }
}

export default Oyster;