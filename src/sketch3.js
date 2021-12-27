function setup() {
  
    createCanvas(windowWidth, windowHeight); // I have to setup my canvas ()
    background(1); // background for the canvas: i can write only once 50 
    noCursor(); // for not showing the mouse
    frameRate(50); 
  }
  
  let nombre = "";
  let corrimiento = 10;
  function draw() {
    textSize(50);
    fill(255);
    text(nombre,60+ corrimiento, 400);
  }
  function keyTyped() {
      nombre = key;
      corrimiento += 40;
      //background(random(0),random(200),random(300));
    for(let i=0;i<10; i++) {
        fill(i,random(i*50),random(i*50));
        text(nombre,60 + corrimiento + i*10, 400 + i*10);
        fill(random(i*50),i,random(i*50));
        text(nombre,150 + corrimiento - i*10, 300 + i*10);
    }
    
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(50,50,50);
  }
  
  function mouseClicked() {
    background(1);
    return false;
  }