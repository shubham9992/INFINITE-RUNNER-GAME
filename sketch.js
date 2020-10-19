var groundImg, ground;
var bombImg, bomb, bombsGroup;
var pointsImg, points, pointsGroup;
var doraemon, doraemonImg;
var invisibleBlockGroup, invisibleBlock;
var gameState =0;
var playerCount;
var score=0,distance=0,allPlayers;
var database,edges,game,player,player1,form;
var back,backImg;

function preload(){
  groundImg = loadImage("images/ground.jpg");
  bombImg = loadImage("images/skull.jpg");
  backImg=loadImage("images/bg.jpg");
  pointsImg = loadImage("images/star2.jpg");
  doraemonImg = loadImage("images/doraemon.jpg");
  BombSound = loadSound("Bomb.wav");      
  bombsGroup = new Group();
  pointsGroup = new Group();
  invisibleBlockGroup = new Group(); 
}

function setup(){
  createCanvas(displayWidth - 20, displayHeight-30);
  database=firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background(backImg);
  edges = createEdgeSprites();
  textSize(25);
  fill("black");
  text("Press \"Space and  ARROW \" keys to move the Doraemon\n",500,50);
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState==2){
    game.end();
  }  
  // if (gameState === "play") {
    
  //   if(keyDown("left_arrow")){
  //     doraemon.x = doraemon.x - 3;
  //   }
  //   if(keyDown("right_arrow")){
  //     doraemon.x = doraemon.x + 3;
  //   }
  //   if(keyDown("space")){
  //     doraemon.velocityY = -10;
  //   }
  //   doraemon.velocityY = doraemon.velocityY + 0.8
    
  //   if(ground.x > 400){
  //     ground.x = 300;
  //   }
  //   spawnbombs();

  //   if(invisibleBlockGroup.isTouching(doraemon) || doraemon.y > 600){
  //     doraemon.destroy();
  //     gameState = "end"
  //   }
  //   drawSprites();
  //   fill("white");
  //   textSize(25);
  //   text("score : "+score,10,20);
  // }
}

// function spawnbombs() {
//   if (frameCount % 140 === 0) {
//     var bomb = createSprite(200, -50);
//     bomb.scale=0.1;
//     var points = createSprite(200,100);
//     points.scale=0.1;
//     var invisibleBlock = createSprite(200,15);
//     invisibleBlock.width = points.width;
//     invisibleBlock.height = 2;
    
//     bomb.x = Math.round(random(120,400));
//     points.x = bomb.x;
//     invisibleBlock.x = bomb.x;
    
//     bomb.addImage(bombImg);
//     points.addImage(pointsImg);
    
//     bomb.velocityY = 1;
//     points.velocityY = 1;
//     invisibleBlock.velocityY = 1;
    
//     doraemon.depth = bomb.depth;
//     doraemon.depth +=1;
   
  
//     bomb.lifetime = 800;
//     points.lifetime = 800;
//     invisibleBlock.lifetime = 800;
    

//     bombsGroup.add(bomb);
//     invisibleBlock.debug = true;
//     pointsGroup.add(points);
//     if(pointsGroup.isTouching(doraemon)){
//       score++;
//     }
//     invisibleBlockGroup.add(invisibleBlock);
//   }
// }