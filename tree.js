class Tree {
    constructor(x,y){
        this.x = x
        this.y = y
        this.groundWidth = 450
        this.groundHeight = 600
        this.groundThickness = 10
        this.image = loadImage("Plucking mangoes/tree.png")
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.groundWidth,this.groundHeight,this.groundThickness,{isStatic: true})
        World.add(world,this.bottomBody)
    }
    display(){
        posBody = this.bottomBody.position
        push();
        translate(posBody.x,posBody.y+10);
        fill(255);
        imageMode(CENTER);
        imagfe(thi)
        pop();

    }
}