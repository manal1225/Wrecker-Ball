class Building{




    constructor(x,y){


        var options={
        
        restitution:0.5,
        friction:0.05,
        density:0.1
        }
        
        this.width = random(100,150)
        this.height = 70;
        this.color = color(random(0,255),random(0,50),random(0,255))
        
        this.body = Bodies.rectangle(x,y,random(100,150),70,options)
        World.add(world,this.body)
        }
        
        
        display(){
        push();
        var pos = this.body.position;
        rectMode(CENTER)
        var angle = this.body.angle;
        translate(pos.x,pos.y)
        rotate(angle)
        angleMode(RADIANS)
        stroke(this.color)
        strokeWeight(3)
       fill(this.color)
        rect(0,0, this.width, this.height)
        pop();
        }
        



}