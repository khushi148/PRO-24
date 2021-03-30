class Iron{
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.9,
          'density':40
      }
      this.body = Bodies.circle(x, y, 25, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,25,25);
     
         }
  };
