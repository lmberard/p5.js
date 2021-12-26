function setup() {
  
    createCanvas(windowWidth, windowHeight); // I have to setup my canvas ()
    background(1); // background for the canvas: i can write only once 50 
    noCursor(); // for not showing the mouse
    frameRate(50); 
  }
  
  //global variables
  let numberFigure = 20;
  let weightMax = 5;
  let heightMax = 5;
  
  function draw() {
    // background(50,50,50);
    strokeWeight(2);
    stroke(random(255),random(255),random(255));
    //fill(random(255),random(255),random(255));
    fill(0,random(100),random(100));
    //stroke(0,random(100),random(100));
    //triangle(mouseX, mouseY,random(20),random(windowHeight));
    triangle(mouseX, mouseY, 30, 30);
    triangle(mouseX, mouseY, windowWidth, windowHeight);
    // ellipse(mouseX, mouseY, 60+mouseY*0.0005, mouseX*0.5);
    // sphere(40);
    for (var i = 0; i < 1; i++) {
      strokeWeight(1);
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
    background(1);
    return false;
  }