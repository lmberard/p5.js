function setup() {
  
  createCanvas(windowWidth, windowHeight); // I have to setup my canvas ()
  background(50,50,50); // background for the canvas: i can write only once 50 
  noCursor(); // for not showing the mouse
  frameRate(50); 
}

//global variables
let numberFigure = 80;
let weightMax = 20;
let heightMax = 20;

function draw() {
  // background(50,50,50);
  strokeWeight(2);
  stroke(random(255),random(255),random(255));
  fill(random(255),random(255),random(255));
  ellipse(mouseX, mouseY,50,50);
  //sphere(40);
  for (var i = 0; i < 10; i++) {
    strokeWeight(2);
    stroke(random(255));
    fill(random(255));
    ellipse(random(windowWidth), random(windowHeight),weightMax,heightMax);
    //triangle(random(windowWidth), random(windowHeight),windowWidth,-heightMax);
    //triangle(random(windowWidth), random(windowHeight),-windowWidth,-heightMax);
  }
}

// This is for resizing the canvas when using the whole screen
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(50,50,50);
}

function mouseClicked() {
  //ellipse(mouseX, mouseY, 50, 50);
  // prevent default
  background(50,50,50);
  return false;
}