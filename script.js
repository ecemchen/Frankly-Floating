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

const mouse = { 
    x: canvas.width/2, // given x-coordinate property to the mouse object and set it to the center of the canvas, so mid of the screen horizontally 
    y: canvas.height/2, // same for y-coordinate, mid of the screen vertically
    click: false // we will use this to check if the mouse is clicked or released
}












// Player Char
// Bubbles
// Animation Loop