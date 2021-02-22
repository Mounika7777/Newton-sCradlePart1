class Rope{
    constructor(bodyA, bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
           
        }
        this.rope=Constraint.create(option);
        World.add(world,this.rope);
    }

    display(){
        var pointA= this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        stroke("white");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      
    }
};