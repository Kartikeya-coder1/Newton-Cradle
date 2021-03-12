class Bob{
    constructor(x,y){
    var options = {
        // isStatic:true,
        restitution:0.8,
        // friction:0.5,
        density:1.2
    }
    this.x = x
    this.y = y
    // this.radius = 
    this.body = Bodies.circle(this.x,this.y,25,options)
    
   
    // this.width = width
    // this.height = height
    //this.image = loadImage("paper.png")
        
    World.add(world,this.body)
    }
    
    display(){
        var pos = this.body.position;
        // var angle = this.body.angle
    //    // rotate (angle)
        //imageMode(CENTER)
         //image(this.image,0,0,this.radius,this.radius)
         fill("yellow")
         stroke("red")
         ellipse(pos.x,pos.y,50,50)
        // pop();
    }
    }