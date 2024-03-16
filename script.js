//----------------------CANVAS SETUP----------------------: inc. initial score - game frame - canvas width and height

const canvas = document.getElementById('canvas1'); 
// A custom variable called "canvas", will keep the reference to the actual html5 canvas element

const ctx = canvas.getContext('2d'); // to gain access to the 2d drawing methods of the canvas
// variable ctx is the shortcut for context of the canvas, and I set it equal to the "const canvas" in ln3 AND we pass it to the 2d

canvas.width = 800; //has to be the same with the css width
canvas.height = 500; //has to be the same with the css height

let score = 0; // initial score
let gameFrame = 0; // initial game frame

ctx.font = '50px Georgia'; // font style and size for the texts in canvas such as "score"

//----------------------MOUSE INTERACTIVITY----------------------

let canvasPosition = canvas.getBoundingClientRect(); // to get the data of canvas position from the browser/viewport
//console.log(canvasPosition); // to see the data (height, ) that the canvasPosition object holds: ss: canvas position from the browser

const mouse = { // custom mouse object holds data
    x: canvas.width/2, // given x-coordinate property to the mouse object and set it to the center of the canvas, so mid of the screen horizontally 
    y: canvas.height/2, // same for y-coordinate, mid of the screen vertically
    click: false // we will use this to check if the mouse is clicked or released
}

// what about the current mouse data? I will use the event listenerss for mouse up/down to override properties the data that holded by mouse object

canvas.addEventListener('mousedown', function(event) { //'event' is a built in object that holds info about the event we are listening for
        // listen for mousedown event and execute the callback function when it happens.
    // 'mousedown' and function(event) are arguments of the addEventListener method
    // callback func has access to event object, so I pass the mouse object here as an argument. 
    // mouse.x = event.x; // when mouse is clicked, update the x-coordinate of the mouse object to the x-coordinate of the 'event' object
    // mouse.y = event.y; // same for y-coordinate
    // console.log(event); // lets see the what data event object holds
    //console.log(mouse.x, mouse.y); // lets see the what data mouse object has when i click -> we see ss: coord. from the browser
    mouse.click = true; //
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;
    //console.log(mouse.x, mouse.y); // lets see if the data is updated correctly: 
});
canvas.addEventListener('mouseup', function() {
    mouse.click = false;
});




//----------------------PLAYER CHARACTER----------------------

class Player {  // declared a js es6 class called 'Player' 
    constructor() { //constructor will contain a blueprint for all properties on 'Player' object
        this.x = canvas.width; // initial starting x coordinate before the player starts moving
        this.y = canvas.height/2; // initial starting y coordinate
        this.radius = 50; // radius of the player character (circle), will add the image later 
        this.angle = 0; // angle of the player character: Will be used when I give the fish sprite sheet to rotate the player character towards the current mouse position
        this.frameX = 0; // coordinates of the currently displayed frame in fish sprite sheet
        this.frameY = 0; // 
        this.frame = 0; // this will keep track of overall number of frames on the sheet and the current position Im animating cuz i have multiline sprite sheet

        this.spriteWidth = 498; // spriteWidth of 1 column (1992px/4 columns)
        this.spriteHeight = 327; // spriteHeight of 1 row (981px/3 rows)
    }

//I need to move the player towards the mouse: I will create a method 'update' method: it will update player position, 
//how: 1st compare player's current position with the mouse position

update () { 
    const dx = this.x - mouse.x; 
    const dy = this.y - mouse.y;
    if (mouse.x != this.x) { // if mouse x is not equal to player x
        this.x -= dx/30; // move the player towards the mouse, divide by 20 to slow down the speed so i can see the animation
    }
    if (mouse.y != this.y) { // if mouse y is not equal to player y
        this.y -= dy/30; // move the player towards the mouse
    }
}

draw

}








// Player Char
// Bubbles
// Animation Loop