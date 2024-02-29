/**
 * Project 1 - Interactive Image
 * Name: Savannah Boyd
 * Comments: A spooky spider! I had so much trouble with the formatting but i found someinteresting sources that helped!
 * Sources used: https://www.geeksforgeeks.org/p5-js-rotate-function/ , https://p5play.org/learn/sprite.html?page=7  
 */

// Global Variables go here
var x = 160; //horizontal location
var y = 120; // vertical location
var d = 100; // diameter
var r = 0; // rotation
let valueX; 
let valueY;  
let sprite; 
 
function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
} 
function draw() {
  // background is drawn first
  background(0, 0,  100);
  spider(x, y, d, r); // call the spider() function (sampled format from UFO project)
  x++; // adds to value of x each frame
  y -=0; // adds to value of x each frame 
  r += -.005; // adds 0.1 to value of each r frame

  if (x > width){
    x = 0;
  }

  if (y < 0){
    y = height;
  }
}  
function spider(tempX, tempY, tempD, tempR){
  
  let r = tempR; // rotation value
  let d = tempD; // diameter

  push(); // create a layer
  translate(tempX, tempY); // use the first two arguments to determing location
  rotate(r);  

  background(100); //light gray background
  // add your image drawing code here 
  rect(120, 160, 195, 15); // bottom horizontal to spider leg one
  rect(120, 160, 15, 45); // bottom spider leg one
  rect(300, 160, 15, 45); //  bottom leg piece two 
  rect(120, 130, 195, 15); // middle leg
  rect(120, 100, 195, 15); // top leg base
  rect(120, 55, 15, 45); // left top leg
  rect(300, 55, 15, 45); // right top leg
  ellipse(215, 150, 115, 140); //spider body base 
  fill(valueX, 255-valueY, 255-valueX); // Fills color for when mouse is clicked
} 
  pop(); // dispose of the layer
/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed() { 
  valueX = mouseX%255; 
  valueY = mouseY%255;  

} 
  // This code line changes the color of the spider when pressed, but only when clicked in seperate spots. So click around the whole image. 