class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false
        }
this.body = Bodies.circle(x,y,radius,options);
World.add(world,this.body);
this.radius = radius;
    }
display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);

    ellipseMode(RADIUS);

    fill("Orange");
  ellipse(0,0,this.radius);
    pop();
}

}