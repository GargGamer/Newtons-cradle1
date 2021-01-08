class Rope{
    cconstructor(body1, body2, offsetX, offsetY){
        
        this.offsetX = offsetX
        this.offsetY = offsetY
        
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            push();
            stroke(48,22,8);
            strokeWeight(7);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
    
}


