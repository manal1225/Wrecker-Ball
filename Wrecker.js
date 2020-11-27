class Wrecker{



    constructor(x,y){

        var options1 = {
        
     
        
        friction:0.05,
        density: 0.05
        }
       this.radius = 50;
        this.body = Bodies.circle(x,y,50,options1)
        World.add(world,this.body)
       // this.image = loadImage("download.jpg")
        }
        
        
        display(){
        
        
            var pos = this.body.position;
           //J imageMode(CENTER)
           fill("brown")
           stroke("skyBlue")
           ellipseMode(RADIUS)
           strokeWeight(10)
          //  image(this.image,pos.x,pos.y,10,10)
        ellipse(pos.x,pos.y,100,100)
        
        }
        
}