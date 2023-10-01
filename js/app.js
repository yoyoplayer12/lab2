// kickstart your world here
// import Island from './classes/Island.js';
// import World from './classes/World.js';

export default class App{

    constructor(){
        console.log('App constructor');
        this.hookEvents();
    }

    hookEvents(){
       // add event listeners ENTER key on #add-item-text
         document.querySelector('#btnAddIsland').addEventListener('click', (event) => {
            console.log('Added Island');
         });
         document.querySelector('#btnSave').addEventListener('click', (event) => {
            console.log('Saved Island');
         });
         document.querySelector('#btnLoad').addEventListener('click', (event) => {
            console.log('Loaded Island');
         });


        


    }

    //add item to the list
    
    // addItem(text){
    //     console.log(`adding item: ${text}`);
    //     let todo = new Todo(text);
    //     todo.render();
    // }


}