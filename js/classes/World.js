import Island from "./Island.js";
export default class World {
  constructor() {
    this.islands = []; // a good place to keep track of your islands
    this.hookEvents(); // let's kick things of by hooking up events
  }

  hookEvents() {
    // hook events like clicking buttons to a specific function
  }

  save() {
    // save array islands to localstorage as string
    const jsonString = JSON.stringify(this.islands);
    localStorage.setItem('islands', jsonString);
    // loop over all this.islands and save the names
  }

  load() {
    // load islands from localstorage into array
    const arraystring = localStorage.getItem('islands');
    const array = JSON.parse(arraystring);
    console.log(array);

    // loop over the array and addIslands()
  }

  getCoordinates() {
    // return coordinates within the screen at random, feel free to change it up!
    let randomSign = Math.random() < 0.5 ? -1 : 1;
    return {
      x: ((Math.random() * window.innerWidth) / 2) * randomSign,
      y: ((Math.random() * window.innerHeight) / 2) * randomSign
    };
  }

  addIsland(island) {
    // add the islands to the DOM
    this.moveIsland(island);
    this.islands.push(island);
    console.log(this.islands);
  }

  moveIsland(island) {
    // this might be a good point to animate the islands with JS Animations API
    const coordinates = this.getCoordinates();


    if(coordinates.x === island.island.style.transform.x && coordinates.y === island.island.style.transform.y){
      console.log("same coordinates");
      this.moveIsland(island);
    }
    else{
      console.log("different coordinates");
      island.island.style.transform = `translate(${coordinates.x}px, ${coordinates.y}px)`;
    }
  }
}
