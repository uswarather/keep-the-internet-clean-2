
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box2,box3,ball,ground;
function preload()
{
	dustbinim=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
    box2 = new Box (588,655,20,150)
    box3 = new Box (749,655,20,150)
    box = new Box (670,750,150,20)
    ground = new Ground (400,780,800,20)
    ball = new Ball (100,600,40)
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  box.display()
  box2.display()
  box3.display()
  ball.display()
  ground.display()
  image (dustbinim,568,575,200,190)
}

function keyPressed(){
 if(keyCode==(UP_ARROW)){
   Matter.Body.applyForce(ball.ball,ball.ball.position,{x:8,y:-30})

 }




}

