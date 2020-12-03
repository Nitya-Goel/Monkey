
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup, ground
var score

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(40, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;

var survivalTime = 0;
bananaGroup = new Group();
obstacleGroup = new Group();
}
function draw() {
background("lightBlue");
 
   
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+survivalTime, 240, 40);
  if (ground.x>0){
    ground.x= ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY= -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  
   food();
  obstacle1();
  
  if (obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
  }

 
 drawSprites(); 
  
}
function food(){
  if(frameCount%80===0){
    banana = createSprite(425, Math.round(random(120,280)), 10, 10);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
    banana.lifetime = 150;
    bananaGroup.add(banana);
  banana.depth = monkey.depth;
  monkey.depth = monkey.depth+1;
 } 
  
  
}
function obstacle1(){
  if(frameCount%200===0){
    obstacle = createSprite(425, 330, 10, 10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
}
}



