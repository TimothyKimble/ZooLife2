class Narwhal {
  constructor(
    name = '',
    color = '',
    fins = 0,
    speed = '',
    toothLength = '',
    babies = 0,
  ) {
    this.name = name;
    this.color = color
    this.fins = fins;
    this.speed = speed;
    this.toothLength = toothLength;
    this.babies = babies;
  }
  stuns(animal) {
    console.log(`${animal} was stunned by ${this.constructor.name}.`)
  }
  says(noise) {
    console.log(`${this.constructor.name} calls ${noise}!`)
  }
}

export default Narwhal;