const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 

var log1,log2,log3;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG; 
var packageBody,ground;
var ground1;

function preload() { 
	helicopterIMG=loadImage("helicopter.png")
	 packageIMG=loadImage("package.png") 
	} 
	
	function setup() { 
		createCanvas(1200, 700); 
		rectMode(CENTER); 
		packageSprite=createSprite(width/2, 80, 10,10); 
		packageSprite.addImage(packageIMG) 
		packageSprite.scale=0.2
		
		helicopterSprite=createSprite(width/2, 200, 10,10); 
	    helicopterSprite.addImage(helicopterIMG)
		helicopterSprite.scale=0.6
		
		groundSprite=createSprite(width/2, height-35, width,10); 
		groundSprite.shapeColor=color(255) 
		engine = Engine.create(); 

		log2 = new Log(500,608,100,0);
		log3 = new Log(700,608,100,0);
		log1 = new Log(605,648,200,90,);
		
		world = engine.world; 
		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
		 World.add(world, packageBody); 
		 
		 ground = Bodies.rectangle(width/2, 622, width, 10 , {isStatic:true} ); 
		 World.add(world, ground); 
		 Engine.run(engine); 
		} 
		
		function draw() { 
		rectMode(CENTER);
		 background(0);
		 packageSprite.x= packageBody.position.x 
		 packageSprite.y= packageBody.position.y 

		 log1.display();
		 log2.display();
		 log3.display();
		 
		 drawSprites(); 
		} 
		
		function keyPressed() {
		 if (keyCode === DOWN_ARROW) { 
			Matter.Body.setStatic(packageBody,false);
		} 
	}
