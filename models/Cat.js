

class Cat {
  constructor(
    name = '',
    breed = '',
    weight = 0,
    gender = '',
    mood = '',
    fed = true,
  ) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.gender = gender;
    this.mood = mood;
    this.fed = fed;
  }
  play(toys) {
    console.log(`${this.constructor.name} is playing with ${toys}..`)
  }
  shout(noise) {
    alert(`${this.constructor.name} screams ${noise}!`)
  }
}

export default Cat;