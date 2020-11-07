var canvas, playerCount, database, form, player, game, allPlayers, car1, car2, car3, car4, cars;
var gameState = 0;
var track, c1img, c2img, c3img, c4img, ground;

function preload() {
  track = loadImage("images/track.jpg");
  c1img = loadImage("images/car1.png");
  c2img = loadImage("images/car2.png");
  c3img = loadImage("images/car3.png");
  c4img = loadImage("images/car4.png");
}

function setup() {
  canvas = createCanvas(displayWidth-50,displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if(playerCount === 2)
    game.update(1);
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}