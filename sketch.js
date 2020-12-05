var fixedRect, movingRect;

function setup() {
  createCanvas(1200, 800);
  
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "yellow";

  movingRect = createSprite(600, 20, 90, 40);
  movingRect.shapeColor = "yellow";
}

function draw() {
  background(0,0,0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect. height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }
  else {
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }

  drawSprites();
}