class Ground {
    constructor() {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(400,380 , 800, 20, options);
      this.width = 800;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);

      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

  