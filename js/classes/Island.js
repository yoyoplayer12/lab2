export default class Island {
  constructor(name) {
    this.name = this.getRandomName();
    this.color = this.getRandomColor();
    this.island = this.createIsland();
  }

  getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  remove() {
    // JS animations api, fade out
    // remove the element when the animation ended
  }
  createIsland() {
    const island = document.createElement("div");
    island.classList.add("island");
    island.style.backgroundColor = this.color;
    island.style.transform = `translate(-50%, -50%)`;
    island.innerHTML = `<h1>${this.name}</h1>`;
    document.body.appendChild(island);
    return island;
  }

  getRandomName() {
    // array with 10 random island names
    const names = [
      "Palmtree beach",
      "Sandy beach",
      "Tropical beach",
      "Palm beach",
      "Sunny beach",
      "Paradise beach",
      "Sunny island",
      "Tropical island",
      "Palm island",
      "Paradise island"
    ];

    // return a random name from the array
    const randomElement = names[Math.floor(Math.random() * names.length)];
    return randomElement;
  }
}
