class Yak {
  constructor(
    name = '',
    gender = '',
    horns = 0,
    fur = '',
    meaty = true,
    calfs = 0,
  ) {
    this.name = name;
    this.gender = gender
    this.horns = horns;
    this.fur = fur;
    this.meaty = meaty;
    this.calfs = calfs;
  }
  ate(plant) {
    console.log(`${this.constructor.name} eats ${plant}`)
  }
  feels(mood) {
    console.log(`${this.constructor.name} feels ${mood}!`)
  }
}

export default Yak;