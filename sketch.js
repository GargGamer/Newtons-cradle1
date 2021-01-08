const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5
var rope1, rope2,rope3, rope4, rope5
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,150,500,20)
	bob1 = new bob(400,250,30,30)
	bob2 = new bob(200,250,30,30)
	bob3 = new bob(300,250,30,30)
	bob4 = new bob(500,250,30,30)
	bob5 = new bob(600,250,30,30)

	rope1 = new Rope(bobObject1.body, roofObject.body, bobDiamter*2, 0)
	rope2 = new Rope(bobObject2.body, roofObject.body, bobDiamter*2, 0)
	rope3 = new Rope(bobObject3.body, roofObject.body, bobDiamter*2, 0)
	rope4 = new Rope(bobObject4.body, roofObject.body, bobDiamter*2, 0)
	rope5 = new Rope(bobObject5.body, roofObject.body, bobDiamter*2, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
}



