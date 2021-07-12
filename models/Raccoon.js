class Raccoon {
  constructor(
    name = '',
    mood = '',
    fingers = 0,
    color = '',
    teeth = 0,
    fluffy = true,
  ) {
    this.name = name;
    this.mood = mood
    this.fingers = fingers;
    this.color = color;
    this.teeth = teeth;
    this.fluffy = fluffy;
  }
  sleeps(place) {
    console.log(`${this.constructor.name} took a nap in ${place} .`)
  }
  pets(animal) {
    console.log(`${this.constructor.name} pet the ${animal}!`)
  }
}

export default Raccoon;