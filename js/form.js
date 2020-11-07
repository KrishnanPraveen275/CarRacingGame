class Form {
    constructor() {
      this.input = createInput("");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
      this.reset = createButton("Reset");
      this.rankStatus = createElement("h1");
      this.gameOver = createElement("h1");
    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(displayWidth/2-100, 30);
      
      this.input.position(displayWidth/2-50, 160);
      this.button.position(displayWidth/2-50, 200);
      this.reset.position(displayWidth-150,50);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(130, 160)
      });

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        Player.updateCarsAtEnd(0)
      });
    }

    hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }
}