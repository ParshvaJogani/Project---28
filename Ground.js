class Ground{
  constructor(){
    this.body = Bodies.rectangle(650,580,1300,10,{isStactic: true});
    World.add(world,this.body)
  }
  display(){
    var posi = this.body.position
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,1300,10);
  }
}
