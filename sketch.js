const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var human,tree,stone,ground,M,Man,Mang,Mango;
var con;

function preload(){
boy = loadImage("Plucking mangoes/boy.png")
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;
    stone = new Stone(160,400,30);
    human = createSprite(200,520)
    human.addImage("boy");
    Boy.scale = 0.1
    M = new mangoe(1100,100,20);
    Man = new mangoe(1170,130,33);
    Mang = new mangoe(1210,140,40);
    Mango = new mangoe(1000,70,30);

    Engine.run(engine)

    sling = new SlingShot(stone.body,{x: 165, y: 420})
    
}

function draw(){
    background("sky blue");
    Engine.update(engine);
    rectMode(CENTER)

    
    
    drawSprites(); 
    stone.display();
    M.display();
    Man.display();
    Mang.display();
    Mango.display();

}

function mouseDragged(){
    matter.Body.setPosition(Stone.body,{x: mouseX, y: mouseY})

}

function mouseReleased(){
    sling = fly();
}

function detectollisions(S,M){
    posStone = S.body.position;
    posMan = M.body.position;

    var distance = dist(posStone.x,posStone.y,posMan.x,posMan.y);
    if(distance<= posStone.r+posMan.r){
        Matter.body.setStatic(M.body,false);
    }
}

