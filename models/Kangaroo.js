class Kangaroo {
  constructor(
    name = '',
    hops = '',
    kickDamage = 0,
    color = '',
    heightFeet = '',
    babies = 0,
  ) {
    this.name = name;
    this.hops = hops
    this.kickDamage = kickDamage;
    this.color = color;
    this.heightFeet = heightFeet;
    this.babies = babies;
  }
  kicks(animal) {
    console.log(`${this.constructor.name} kicks ${animal}! Its super effective!`)
  }
  says(noise) {
    console.log(`${this.constructor.name} howls ${noise}!`)
  }
}

export default Kangaroo;