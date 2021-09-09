var backgroundImg;
var trex;
var trexr;
var ground;
var imagenrandom;

function preload() {
  trexr = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  backgroundImg = loadImage("backgroundImg.png");
  suelo = loadImage("ground.png")
  imagenrandom = loadImage("jake1.png")
}



function setup() {
  createCanvas(600, 400);
  trex = createSprite(50, 300, 10, 10);
  trex.scale=0.2
  trex.addAnimation("running", trexr);
  ground = createSprite(200,400,400,20)
  ground.scale = 0.5;
  ground.addImage(suelo)
  sueloinvisible = createSprite(210, 400, 400, 10)

jack = createSprite(200, 200, 10, 10)
jack.addImage(imagenrandom)


}




function draw() {
  background(backgroundImg);
  trex.collide(sueloinvisible) 
  ground.velocityX = -3;
  drawSprites()
  
}