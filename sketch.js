
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var building = []
function preload()
{
	cityBackground =loadImage("city.png")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

//buidibgs
for(var i =100; i<700; i=i+70){
building.push(new Building(600,i))
}


wrecker = new Wrecker(100,800);



rope = new Rope(wrecker.body,{x:100,y:100})
building1 = new Building(600,700)
Matter.Body.setStatic(building1.body,true)



	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(cityBackground);
 // Engine.update(engine)

 rope.display();
  wrecker.display();




for(var i=0; i<building.length; i++){
building[i].display();
}
 building1.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(wrecker.body,wrecker.body.position,{x:100,y:-50})
}


}

