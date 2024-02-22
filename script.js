/**
 * Project 1 - Interactive Image
 * Name: Savannah Boyd
 * Comments: A spooky spider!
 */

// Global Variables go here

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
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
  fill(0);
/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
  } else {
    // do something here if the mouse is NOT pressed
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}