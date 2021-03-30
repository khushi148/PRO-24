
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(400,200);

	ground=new Ground();

	rubber=new Rubber(200,100);

	hammer=new Hammer(500,150);

	sand1=new Sand(300,200);
	sand2=new Sand(310,190);
	sand3=new Sand(320,200);
	sand4=new Sand(330,190);
	sand5=new Sand(360,200);
	sand6=new Sand(340,190);
	sand7=new Sand(350,190);
	sand8=new Sand(370,200);
	sand9=new Sand(330,200);
	sand10=new Sand(330,190);

	iron=new Iron(500,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
	  stone.display();
  
 	 ground.display();

	rubber.display();

	hammer.display();

	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	sand8.display();
	sand9.display();
	sand10.display();

	iron.display();

  drawSprites();
 
}



