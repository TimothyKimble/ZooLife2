class Uguisu {
  constructor(
    name = '',
    size = '',
    eggs = 0,
    gender = '',
    beaksize = '',
    feathers = 0,
  ) {
    this.name = name;
    this.size = size
    this.eggs = eggs;
    this.gender = gender;
    this.beaksize = beaksize;
    this.feathers = feathers;
  }
  Pecks(person) {
    console.log(`${this.constructor.name} attacked ${person}.`)
  }
  says(noise) {
    console.log(`${this.constructor.name} yells ${noise}!`)
  }
}

export default Uguisu;