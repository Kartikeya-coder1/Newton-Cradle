var bob,bob2,bob3,bob4,bob5;
var Ground;
var g1,g2,g3,g4,g5;
var elastic,elastic2,elastic3,elastic4,elastic5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	bob = new Bob(300,300,25);
	bob2 = new Bob(350,300,25);
	bob3 = new Bob(400,300,25);
	bob4 = new Bob(450,300,25);
	bob5 = new Bob(500,300,25);
	
	// test1 =  new Bob(200,670,80);
	
	g1 = new ground();
	// g2 = new ground(400,200,100,20);
	// g3 = new ground(482,200,100,20);
	// g4 = new ground(564,200,100,20);
	// g5 = new ground(646,200,100,20);
	
	

	// Ground = new ground(500,200,500,20);
	//elastic = new Rope(bob.body,Ground.body,-320,0);
	
	elastic = new Rope(bob.body,g1.body,-100)
	elastic2 = new Rope(bob2.body,g1.body,-50);
	elastic3 = new Rope(bob3.body,g1.body,0);
	elastic4 = new Rope(bob4.body,g1.body,50);
	elastic5 = new Rope(bob5.body,g1.body,100);

	// =-+(){[:;"''<>?,./"]}

	console.log(bob.radius," ",bob2.radius," ",bob3.radius," ",bob4.radius)
	// bob.debug = true ;



	//test = createSprite(200,200,50,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  elastic.display();
  elastic2.display();
  elastic3.display();
  elastic4.display();
  elastic5.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //
  
  g1.display();
//   g2.display();
//   g3.display();
//   g4.display();
//   g5.display();
// //   test1.display()
  
  //elastic.display();
//   Ground.display();

  
//   bob.detectCollision(bob2);
//   bob2.detectCollision(bob3);
//   bob3.detectCollision(bob4);
//  bob4.detectCollision(bob5);

  
  drawSprites();
 
}

function keyPressed(){
	console.log("WHY NOT WORKING?")
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-30});
		
	}

}
// NEW FUNCTION, NOT WORKING!!!!!

// function detectCollision(bob,bob2,bob3,bob4,bob5){
// 	bobBodyPosition = bob.body.position 
// 	bob2BodyPosition = bob2.body.position 
// 	bob3BodyPosition = bob3.body.position 
// 	bob4BodyPosition = bob4.body.position 
// 	bob5BodyPosition = bob5.body.position 
// 	// bobBodyPosition = bob.body.position 

// 	//////////////////////////////////////////////////////////////////////////// setting for bob and bob2
// 		var distance = dist(bobBodyPosition.x,bobBodyPosition.y,bob2BodyPosition.x,bob2BodyPosition.y) 
// 	console.log(distance)
	
// 	if(distance<=bob.radius+bob2.radius){
// 		Matter.Body.setStatic(bob2.body , false);
// }
// // /////////////////////////////////////////////////////////////////////////////////////////////// bob2 and bob3
// var distance2 = dist(bob2BodyPosition.x,bob2BodyPosition.y,bob3BodyPosition.x,bob3BodyPosition.y) 
// console.log(distance)

// if(distance2<=bob2.radius+bob3.radius){
// 	Matter.Body.setStatic(bob3.body , false);
// }



// // // /////////////////////////////////////////////////////////////////////////////////////////////// bob3 and bob4
// // var distance3 = dist(bob3BodyPosition.x,bob3BodyPosition.y,bob4BodyPosition.x,bob4BodyPosition.y) 
// // console.log(distance)

// // if(distance3<=bob3.radius+bob4.radius){
// // 	Matter.Body.setStatic(bob4.body , false);
// // }

// // // /////////////////////////////////////////////////////////////////////////////////////////////// bob4 and bob5
// // var distance4 = dist(bob3BodyPosition.x,bob3BodyPosition.y,bob4BodyPosition.x,bob4BodyPosition.y) 
// // console.log(distance)

// // if(distance4<=bob4.radius+bob5.radius){
// // 	Matter.Body.setStatic(bob5.body , false);
// // }

//  }






