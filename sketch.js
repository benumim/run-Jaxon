var runner;
var runnerAnimation;

var pathImage;

var leftBoundary;
var rightBoundary;

function preload(){
  //loading images
  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  //creating sprites and adding animations to them
  path = createSprite(200,200,400,400);
  path.addImage("pathImage", pathImage);

  runner = createSprite(200,300,30,30);
  runner.addAnimation("runnerAnimation", runnerAnimation);
  runner.scale = 0.1;

  leftBoundary = createSprite(75,200,10,400);
  rightBoundary = createSprite(330,200,10,400);
}

function draw() {
  background(0);
  drawSprites();

  //making an infinite path
  path.velocityY = 5;
  if (path.y > 400){
    path.y=height/2;
  }

  //adding movement to the runner

  if (keyDown("left")){
    runner.x = runner.x - 5;
  }

  if (keyDown("right")){
    runner.x = runner.x + 5;
  }

  //making the boundaries invisible and making the runner colide with them
  leftBoundary.visible = false;
  rightBoundary.visible = false;
  
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);
}
