class Salmon {
  constructor(
    name = '',
    mood = '',
    fins = 0,
    type = '',
    teeth = 0,
    slimey = true,
  ) {
    this.name = name;
    this.mood = mood
    this.fins = fins;
    this.type = type;
    this.teeth = teeth;
    this.slimey = slimey;
  }
  swims(distance) {
    console.log(`${this.constructor.name} swam ${distance} miles!`)
  }
  eats(bugs) {
    console.log(`${this.constructor.name} eats ${bugs}!`)
  }
}

export default Salmon;