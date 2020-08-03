class Chain {
    constructor(BodyA, BodyB){
 var options=
       {
           bodyA :BodyA,
           bodyB :BodyB,
           stiffnes:0.62,
           length : 10
    }
    this.constraint=Constraint.create(options);
    World.add (world,this.constraint)
    }
 display(){
     strokeWeight(9);
     line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.bodyB.position.x,this.constraint.bodyB.position.y );
 }

}
