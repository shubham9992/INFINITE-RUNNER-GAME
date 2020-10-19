class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }


    BombSound.loop();
    ground = createSprite(300,300);
    ground.addImage("ground",groundImg);
    ground.velocityX = -1;
  
    player = createSprite(200,200,50,50);
    player.scale = 0.09;
    player.addImage("player1", doraemonImg);

  
  }

  play(){
    
    form.hide();
    image(backImg,0,0,displayWidth - 20, displayHeight-30);
    Player.getPlayerInfo();
   
    if(player.distance>3750){
      gameState=2;
    }
    if(allPlayers !== undefined){
      var index = 0;
      var x = 175;
      var y;
      drawSprites();
      for(var plr in allPlayers){
        index = index + 1 ;

        x = x + 200;
        
       y = displayHeight - allPlayers[plr].distance;

        console.log("index",player.index);
        if (index === player.index){
          camera.position.x = displayWidth/2;
          camera.position.y = player1.y;
        }
        fill("red");
       text("Strive to save the life of player: ",400,50);
     
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
   
        if(keyDown("left_arrow") && player.index !== null){
          console.log("left");
          player1.x = player1.x - 3;
          player.distance +=10;
          player.update();
        }

        if (keyDown("right_arrow") && player.index !== null) {
          console.log("right");
          player1.x = player1.x + 3;
          player.distance -= 10;
          player.update();
        
        if(keyDown("space")){
              player1.velocityY = -10;
            }
            player1.velocityY = player1.velocityY + 0.8;

        if(ground.x > 400){
            ground.x = 300;
         }
  
         if (frameCount % 140 === 0) {
          var bomb = createSprite(200, -50);
          bomb.scale=0.1;
          var points = createSprite(200,100);
          points.scale=0.1;
          var invisibleBlock = createSprite(200,15);
          invisibleBlock.width = points.width;
          invisibleBlock.height = 2;
          
          bomb.x = Math.round(random(120,400));
          points.x = bomb.x;
          invisibleBlock.x = bomb.x;
          
          bomb.addImage(bombImg);
          points.addImage(pointsImg);
          
          bomb.velocityY = 1;
          points.velocityY = 1;
          invisibleBlock.velocityY = 1;
          
          player1.depth = bomb.depth;
          player1.depth +=1;
         
        
          bomb.lifetime = 800;
          points.lifetime = 800;
          invisibleBlock.lifetime = 800;
          
      
          bombsGroup.add(bomb);
          invisibleBlock.debug = true;
          pointsGroup.add(points);
          if(player1.isTouching(pointsGroup)){
            //player.score++;
            score++;
            console.log("score :",score);
          }
          invisibleBlockGroup.add(invisibleBlock);
        } 
        if(invisibleBlockGroup.isTouching(player1) || player1.y > 600){
              player1.destroy();
              gameState = 2;
            }
            drawSprites();
            fill("white");
            textSize(25);
            text("score : "+score,10,20);
         
      
        textSize(30);
        fill("white");
        text("Score : "+player.score,30,30);
       
      }
  }
}
  
  end(){
    console.log("Game Over!!!");
  }

}