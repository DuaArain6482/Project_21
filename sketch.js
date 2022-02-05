
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,leftground,rightground;
var radius = 40

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ball=Bodies.circle(260,100,radius/2,ball_options);
  World.add(world,ball)
  var ball_options={
	  isStatic: false,
	  restitution:0.3,
	  friction:0,
	  density:1.2,
  }

  ground=new Ground(width/2,670,width,20);
  leftground=new Ground(1100,600,20,120);
  rightground=new Ground(1350,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,radius,radius);
  ground.display()
  leftground.display()
  rightground.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.85,y:-0.85});
	}
}



