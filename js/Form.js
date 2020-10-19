class Form {

  constructor() {
    this.input = createInput("Player Name");
    this.button = createButton('Get Started...');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton('Reset');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Doraemon flying");
    this.title.style('background', 'yellow');
    this.title.position(displayWidth/2 - 50, 100);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.input.style('width','120px');
    this.input.style('height','20px');
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button.style('width','100px');
    this.button.style('height','20px');
    this.reset.position(900, 700);
    this.reset.style('width', '100px');
    this.reset.style('height', '40px');
    this.reset.style('background', 'lightpink');

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name);
      this.greeting.style('background', 'cyan');
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
