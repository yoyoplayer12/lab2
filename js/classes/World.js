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
    if(arraystring){
      //remove all islands?
      // this.islands = [];
      

      // loop over the array and addIslands()
      array.forEach(element => {
        const island = new Island(false);
        island.name = element.name;
        island.color = element.color;
        //create island
        const htmlisland = document.createElement("div");
        htmlisland.classList.add("island");
        htmlisland.style.backgroundColor = island.color;
        htmlisland.style.transform = `translate(-50%, -50%)`;
        htmlisland.innerHTML = `<h1>${island.name}</h1>`;
        htmlisland.style.transform = `translate(${element.x}px, ${element.y}px)`;
        island.element = htmlisland;
        //add island to array
        this.islands.push(island);
        document.body.appendChild(htmlisland);
    });
    }

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
    if(island.x === 0 && island.y === 0){
      console.log(island);
      console.log("new island");
      island.island.style.transform = `translate(${coordinates.x}px, ${coordinates.y}px)`;
      island.x = coordinates.x;
      island.y = coordinates.y;
    }
    else{
      // this.checkCoordinates(island, coordinates);
      console.log("not a new island");
    }
    // if(coordinates.x === island.island.style.transform.x && coordinates.y === island.island.style.transform.y){
    //   console.log("same coordinates");
    //   this.moveIsland(island);
    // }
    // else{
    //   console.log("different coordinates");
    //   island.island.style.transform = `translate(${coordinates.x}px, ${coordinates.y}px)`;
    //   island.x = coordinates.x;
    //   island.y = coordinates.y;
    // }
  }
}
