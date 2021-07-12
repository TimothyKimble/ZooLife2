

class Dolphin {
  constructor(
    name = '',
    fins = 0,
    gender = '',
    speed = 0,
    lengthFoot = 0,
    children = 0,
  ) {
    this.name = name;
    this.fins = fins;
    this.gender = gender;
    this.speed = speed;
    this.lengthFoot = lengthFoot;
    this.children = children;
  }
  swim(fast) {
    console.log(`Swims ${fast} per hour!`)
  }

  speaks(vibration) {
    alert(`${this.constructor.name} speaks in ${vibration}!`)
  }
}

export default Dolphin;