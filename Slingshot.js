class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
            
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
        
  
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1, 200, 20);
        image(this.image2, 170, 20);
 
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            if(this.sling.bodyA.position.x< 220){
                push();
                strokeWeight(4);
               
                stroke(85, 39, 15);
               
                // drawn constraint in the form of a line between bodyA/bird.body and pointB/{x:200, y:50}
                //line(pointA.x, pointA.y, pointB.x, pointB.y);
                // line has 2 points -> 1. starting (pointA/bird.body), 2. ending(pointB/{x:200, y:50}) -> they have x, y coordinates 
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.image3,pointA.x -30, pointA.y -10,15,30);
                pop();

            }else{
                push();
                strokeWeight(6);
                
                stroke(85, 39, 15);
                
                // drawn constraint in the form of a line between bodyA/bird.body and pointB/{x:200, y:50}
                //line(pointA.x, pointA.y, pointB.x, pointB.y);
                // line has 2 points -> 1. starting (pointA/bird.body), 2. ending(pointB/{x:200, y:50}) -> they have x, y coordinates 
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.image3,pointA.x -30, pointA.y -10,15,30);
                pop();
            }
            
            
        }
    }
    
}