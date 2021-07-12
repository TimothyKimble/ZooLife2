import Alligator from './Alligator.js'
import Beaver from './Beaver.js'
import Cat from './Cat.js'
import Dolphin from './Dolphin.js'
import Eagle from './Eagle.js'
import Fox from './Fox.js'
import Goat from './Goat.js'
import Hedgehog from './Hedgehog.js'
import Iguana from './Iguana.js'
import Jellyfish from './Jellyfish.js'
import Kangaroo from './Kangaroo.js'
import Lobster from './Lobster.js'
import Moose from './Moose.js'
import Narwhal from './Narwhal.js'
import Oyster from './Oyster.js'
import Penguin from './Penguin.js'
import Quail from './Quail.js'
import Raccoon from './Raccoon.js'
import Salmon from './Salmon.js'
import Tiger from './Tiger.js'
import Uguisu from './Uguisu.js'
import Vulture from './Vulture.js'
import Wolf from './Wolf.js'
import Xerus from './Xerus.js'
import Yak from './Yak.js'
import Zebra from './Zebra.js'


let Ally = new Alligator('ally', 'green', 'female', 300, 36, 'Big');

let Boe = new Beaver('Boe', 'Brown', 'Male', 3, true, 24);

let Clarice = new Cat('Clarice', 'Maine Coon', 10, 'Female', 'Happy', true);

let Dory = new Dolphin('Dory', 4, 'Female', 37, 8, 0)

let Enid = new Eagle('Enid', 6, 'Brown', 7000, true, 10);

let Floofy = new Fox('Floofy', 'Red Fox', 20, 'White', true, 5);

let Gertrude = new Goat('Gertrude', 'Medium', 2, 'White', 'Disgusting', 1);

let Harold = new Hedgehog('Harold', 'Small', 5000, 'Brown', 'Blue', 5);

let Ivan = new Iguana('Ivan', 'Fire', 2000, 'Green', 7, 3);

let Jake = new Jellyfish('Jake', 'slow', 20, 'Pink', 'Oval', 2000);

let Karl = new Kangaroo('Karl', 'High', 9001, 'Brown', 8, 2);

let Larry = new Lobster('Larry', 'Sharp', 8, 'Red', 'Big', 16);

let Meredith = new Moose('Meredith', 'Brown', 50, 30, 10, 2);

let Neil = new Narwhal('Neil', 'White', 2, 3, '3 meters', 0);

let Oliver = new Oyster('Oliver', 'Medium', 1, 'Black', 'Oval', true);

let Polly = new Penguin('Polly', '5 feet', 2, 'Emporer', 'Sharp', true);

let Quinten = new Quail('Quinten', 'Small', 5, 'Male', '10 inches', 1500);

let Randy = new Raccoon('Randy', 'Chill', 10, 'Gray', 40, true);

let Sally = new Salmon('Sally', 'Mad', 4, 'Silver Salmon', 200, true);

let Tigger = new Tiger('Tigger', 'Bengal', 18, 'Orange', true, 2);

let Ugasaki = new Uguisu('Ugasaki', 'small', 10, 'female', '3 inches', 2000);

let Valerie = new Vulture('Valerie', '3 feet', 4, 'Female', '36 inches', 4000);

let William = new Wolf('William', 'Arctic', 10, 'White', true, 0);

let Xavier = new Xerus('Xavier', 'Squirrel', 10, 'Brown', true, 10);

let Yusra = new Yak('Yusra', 'Female', 2, 'Black', true, 3);

let Zander = new Zebra('Zander', 7, 50, '4 Feet', true, 0);



class animals {
  constructor(
    land = [Ally, Boe, Clarice, Floofy, Gertrude, Harold, Ivan, Karl, Meredith, Polly, Randy, Tigger, William, Yusra, Zander],
    water = [Dory, Jake, Larry, Neil, Oliver, Sally],
    sky = [Enid, Quinten, Ugasaki, Valerie, Xavier]
  ) {
    this.land = land;
    this.water = water;
    this.sky = sky;
  }

}
export default animals

