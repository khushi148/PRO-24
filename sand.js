class Sand{
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 5, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("pink");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,5,5);
     
         }
  };
