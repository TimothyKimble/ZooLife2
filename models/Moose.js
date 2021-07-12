class Moose {
  constructor(
    name = '',
    furColor = '',
    droppings = 0,
    speed = '',
    heightFeet = '',
    babies = 0,
  ) {
    this.name = name;
    this.furColor = furColor
    this.droppings = droppings;
    this.speed = speed;
    this.heightFeet = heightFeet;
    this.babies = babies;
  }
  kicks(animal) {
    console.log(`${this.constructor.name} kicks ${animal}! ${animal} fainted!`)
  }
  says(noise) {
    console.log(`${this.constructor.name} calls ${noise}!`)
  }
}

export default Moose;