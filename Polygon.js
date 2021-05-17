class Polygon {

  constructor(x,y,radius){

   var  option ={
        isStatic : false,
        friction : 0.5,
        restitution : 0.1

    }

    this.x = 150;
    this.y = 600;
    this.diameter = diameter;
    this.body = Bodies.circle(x,y,radius,radius);
    World.add(world, this.body);
  }

  display(){

    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(polygon.img,polygon.position.x,polygon.position.y,radius,radius);
    pop();
  }

}