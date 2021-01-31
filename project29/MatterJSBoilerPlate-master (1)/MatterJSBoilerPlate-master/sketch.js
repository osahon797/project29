
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stand
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box14,box15,box16
var polygon
var slingshot

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stand = new Ground(1220,650,350,30)
ground= new Ground(800,750,1600,30)
polygon = new Polygon(50,200,50)
slingshot = new Slingshot(polygon.body,{x:200,y:500});

box= new Box(1105,595,30,40)
box2= new Box(1135,595,30,40)
box3= new Box(1165,595,30,40)
box4= new Box(1195,595,30,40)
box5= new Box(1225,595,30,40)
box6= new Box(1255,595,30,40)
box7= new Box(1285,595,30,40)
box8= new Box(1250,555,30,40)
box9= new Box(1160,555,30,40)
box10= new Box(1190,555,30,40)
box11= new Box(1220,555,30,40)
box12= new Box(1130,555,30,40)
box13= new Box(1160,515,30,40)
box14= new Box(1190,515,30,40)
box15= new Box(1220,515,30,40)
box16= new Box(1190,475,30,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  stand.display()
  ground.display()
  polygon.display()
  slingshot.display()

  box.display()
  box2.display()
  box3.display()
  box4.display() 
  box5.display() 
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
 
  drawSprites();
 
}

function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  
}

