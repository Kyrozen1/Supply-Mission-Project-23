var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var wallBody, wallSprite, wallBody2, wallSprite2, wallBody3, wallSprite3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	wallSprite=createSprite(width/2, 660, 200,15);
	wallSprite.shapeColor="red";

	wallSprite2=createSprite(300, 610, 10,100);
	wallSprite2.shapeColor="red";

	wallSprite3=createSprite(500, 610, 10,100);
	wallSprite3.shapeColor="red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);

	wallBody = Bodies.rectangle(width/2 , 660 , 5 , 10, {isStatic:true});
	World.add(world, wallBody);	

	wallBody2 = Bodies.rectangle(width/2 , 660 , 5 , 10, {isStatic:true});
	World.add(world, wallBody2);	

	wallBody3 = Bodies.rectangle(width/2 , 660 , 5 , 10, {isStatic:true});
	World.add(world, wallBody3);	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, isStatic=false, 'restitution:0.1')
    
  }
}