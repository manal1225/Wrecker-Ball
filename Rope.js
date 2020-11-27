class Rope{

constructor(body1,pointB){


var options = {

bodyA : body1,
pointB : pointB,
stiffness:1,
length:500



}
this.pointB = pointB;
this.rope = Constraint.create(options)
World.add(world,this.rope)
}


display(){
strokeWeight(5)
stroke("black")
var posA = this.rope.bodyA.position;
var posB = this.pointB;
line(posA.x, posA.y, posB.x , posB.y)

}





}