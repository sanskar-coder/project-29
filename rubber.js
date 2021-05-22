class Rubber{
    constructor(body,anchor){
     var options={bodyA:body,pointB:anchor,stiffness:0.004,length:3}
     this.bodyA = body;
     this.pointB = anchor;
     this.Rubber = Constraint.create(options);
     World.add(world,this.Rubber);
    }
    
    display(){
        if(this.Rubber.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        } 
    }
    
    fly(){
     this.Rubber.bodyA = null;
    }
            
    attach(body){
     this.Rubber.bodyA = body;
    }
    

    
}