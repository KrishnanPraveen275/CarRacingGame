class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState: state
        });
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(200,250);
        car2 = createSprite(300,250);
        car3 = createSprite(400,250);
        car4 = createSprite(500,250);
        car1.addImage("car1",c1img);
        car2.addImage("car2",c2img);
        car3.addImage("car3",c3img);
        car4.addImage("car4",c4img);
        cars = [car1,car2,car3,car4];
    }

    play(){ 
        form.hide(); 
        //textSize(30); 
        //text("Game Start", 120, 100) 
        Player.getPlayerInfo(); 
        player.getCarsAtEnd();
        if(allPlayers !== undefined){
            background("#c68767");
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
            //var display_position = 130;
            var index = 0;
            var x = 175
            var y = 0
            for(var plr in allPlayers){
                index++
                x+=200
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x
                cars[index-1].y=y
                textAlign(CENTER)
                textSize(20)
                fill("white")
                text(allPlayers[plr].name,x,y+70)
                if(index === player.index){
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                    fill("yellow");
                    ellipse(x,y,60,60);
                }
                /*if (plr === "player" + player.index) 
                   fill("red") 
                else 
                fill("black"); 
                display_position+=20;
                player.index++
                textSize(15); 
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)*/ 
            } 
        } 
        if(keyIsDown(UP_ARROW) && player.index !== null&&player.distance<3550){ 
            player.distance +=50 
            player.update(); 
        
        }
        if(player.distance>3520){
            gameState = 2;
            player.rank++
            form.rankStatus.html("Rank "+player.rank);
            form.rankStatus.position(50,50);
            Player.updateCarsAtEnd(player.rank);
        }
    drawSprites(); 
    } 

    end() {
        form.gameOver.html("GAME OVER!!");
        form.gameOver.position(50,80);
    }
}
