var forestImg, forest;
var rockImg,rock, rocksGroup;
var girl, girlImg;
var demon, demonImg;
var invisibleBlock, invisibleBlockGroup;
var gameState = "play";
var gameState = "end";

function preload(){
forestImg = loadImage("Forest.png");
rockImg = loadImage("obstacle.png");
girlImg = loadImage("girl.png");
demonImg = loadImage("demongirl.png")
}

function setup() {
 createCanvas(600,400);
 forest = createSprite(400,200);
 forest.addImage("forest",forestImg);
 forest.velocityX = -3;
 forest.scale = 0.20;

 rocksGroup = new Group();
 invisibleBlockGroup = new Group();
 
 girl = createSprite(350,320,50,50);
 girl.addAnimation("running",girlImg);
 girl.scale = 0.25

 demon = createSprite(200,320,50,50);
 demon.addImage("demon", demonImg);
 demon.scale = 0.25;
 }

function draw() {
 background(0);

 if(forest.x > 200){
  forest.x = 100
 }

 if (gameState === "play") {
   if(keyDown("left_arrow")){
     girl.x = girl.x - 3;
   }
   
   if(keyDown("right_arrow")){
     girl.x = girl.x + 3;
   }
   
   if(keyDown("space")){
     girl.velocityY = -10;
   }
   
   if(forest.x > 400){
    forest.x = 300
   }
   girl.velocityY = girl.velocityY + 0.8
  }
   if(rocksGroup.isTouching(girl)){
   gameState = "end";
}
if (gameState === "end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over", 230,250)
}
spawnRocks();
drawSprites();
}
 
  function spawnRocks() {
  if (frameCount % 120 === 0) {
    var rock = createSprite(width+20,height-40,40,10);
    rock.addImage(rockImg);
    rock.scale = 0.15;
    rock.velocityX = -3;
    rock.lifetime = 200
    
    rock.depth = girl.depth;
    girl.depth = girl.depth + 1;

  }
  }