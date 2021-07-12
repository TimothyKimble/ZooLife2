import animals from "./models/Zoo.js";

let Zoo = new animals
console.log(Zoo)
console.log(Zoo.land)
console.log(Zoo.water)
console.log(Zoo.sky)


function drawAnimals() {
  window.document.getElementById('land').innerHTML = `<h5> ${Zoo.land}</h5>`
}

drawAnimals()