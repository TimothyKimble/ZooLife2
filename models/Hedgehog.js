class Hedgehog {
  constructor(
    name = '',
    size = '',
    pins = 0,
    color = '',
    eyecolor = '',
    children = 0,
  ) {
    this.name = name;
    this.size = size
    this.pins = pins;
    this.color = color;
    this.eyecolor = eyecolor;
    this.children = children;
  }
  Rolls(direction) {
    console.log(`${this.constructor.name} is rolling ${direction}`)
  }
  says(noise) {
    console.log(`${this.constructor.name} says ${noise}!`)
  }
}

export default Hedgehog;