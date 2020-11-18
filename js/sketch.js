var database;
var backgroundimage;
var gameState = 0;
var playerCount = 0;
var allPlayers;

var player,form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1image,fruit2image,fruit3image,fruit4image,fruit5image;
var playerimage;


function preload(){
  backgroundimage = loadImage("images/jungle.jpg");
  playerimage = loadImage("images/basket2.png");
  fruit1image = loadImage("images/apple2.png");
  fruit2image = loadImage("images/banana2.png");
  fruit3image = loadImage("images/melon2.png");
  fruit4image = loadImage("images/orange2.png");
  fruit5image = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}
 
function draw() {
  background(backgroundimage);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}