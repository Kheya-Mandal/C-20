  
var fixedRect, movingRect;
var m,f,m2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  m=createSprite(300,200,80,20);
  m.shapeColor = "pink";
  m.velocityX=5;
  f=createSprite(800,200,80,90);
  f.shapeColor = "pink";
  f.velocityX=-5;
  f.debug = true;
  m2=createSprite(800,700,80,20);
  m2.shapeColor = "pink";
  m2.velocityY=-5;



}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  // collission algorithm
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&
      movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

// BounceOff algorithm in x and y direction
if(m.x-f.x<m.width/2+f.width/2
  &&f.x-m.x<m.width/2+f.width/2){
 m.velocityX=m.velocityX*-1;
 f.velocityX=f.velocityX*-1;
}

if(m2.y-f.y<m2.height/2+f.height/2
  &&f.y-m2.y<m2.height/2+f.height/2){
 m2.velocityY=m2.velocityY*-1;
}






  drawSprites();
} 