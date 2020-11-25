var trashSprite,trashSpriteBody,left,right,floor;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 110);
	rectMode(CENTER);
	
	floor=createSprite(850,90,200,20);
	left=createSprite(850+100,70,20,40);
	right=createSprite(850-100,70,20,40);

	trashSprite=createSprite(10, 10, 10,10);
	trashSprite.scale=1

	groundSprite=createSprite(width/2, 100, width*2,10);
	groundSprite.shapeColor=color(255);

	left.shapeColor=color(155);
	right.shapeColor=color(155);
	floor.shapeColor=color(155);

	engine = Engine.create();
	world = engine.world;

	trashSpriteBody = Bodies.circle(10 , 10 , 10 ,{restitution:0, isStatic:false});
	World.add(world, trashSpriteBody);

	ground = Bodies.rectangle(width/2, 100, width*2, 10 , {isStatic:true} );
	 World.add(world, ground);

	 left = Bodies.rectangle(width/2-100 , 590 , 100 , 20 ,{restitution:0, isStatic:true} );
	World.add(world, left);

	right = Bodies.rectangle(width/2+100 , 590 , 100 , 20 ,{restitution:0, isStatic:true} );
	World.add(world, right);

	floor = Bodies.rectangle(width/2 , 630 , 200 , 20 ,{restitution:0, isStatic:true} );
	World.add(world, floor);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  trashSprite.x= trashSpriteBody.position.x 
  trashSprite.y= trashSpriteBody.position.y 

  trashSprite.display();

  console.log(trashSprite.y);

  keyPressed();
  drawSprites();
}
function keyPressed() {
 if (keyCode===32) {
	Matter.Body.applyForce(trashSpriteBody,trashSpriteBody.position, {x: trashSpriteBody.postion-30,y:trashSpriteBody+30});
	console.log("LAUNCH");
  }
}