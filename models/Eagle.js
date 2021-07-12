

class Eagle {
  constructor(
    name = '',
    wingspanFeet = 0,
    color = '',
    feathers = 0,
    nest = true,
    age = 0,
  ) {
    this.name = name;
    this.wingspanFeet = wingspanFeet;
    this.color = color;
    this.feathers = feathers;
    this.nest = nest;
    this.age = age;
  }
  fly(height) {
    console.log(`Flying at ${height} feet in the sky!`)
  }
  call(sound) {
    alert(`${this.constructor.name} screeches ${sound}!`)
  }
}

export default Eagle;