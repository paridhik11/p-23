const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,computerplayer,player,playerBase,computerBase;

function preload(){
  archeryImg=loadImage("archery.png")
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
playerBase=new PlayerBase(300,random(450,height-300),180,150)
player=new Player(285,playerBase.body.position.y-153,50,180)
computerBase=new ComputerBase(1300,random(450,height-300),180,150)
computerPlayer=new ComputerPlayer(1282,playerBase.body.position.y-153,50,160)
 }

function draw() {

  background(180);
  image(archeryImg,550,200,400,400)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
player.display()
computerPlayer.display()

   //display Player and computerplayer
playerBase.display()
computerBase.display()

}
