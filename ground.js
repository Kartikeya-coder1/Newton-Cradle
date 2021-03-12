class ground
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		this.body=Bodies.rectangle(400,100,300,20,options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			// push()
			// translate(groundPos.x, groundPos.y);
			 rectMode(CENTER)
			//strokeWeight(4);
			fill("yellow")
			stroke("red")
			rect(groundPos.x,groundPos.y,300,20);
			//pop()
			
	}

}