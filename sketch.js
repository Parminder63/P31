const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var rain=[];
var man1;
var maxDrops=100;
function preload(){
    
}

function setup(){
    createCanvas(450, 700);
	engine = Engine.create();
	world = engine.world;
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
           rain.push(new drop(random(0,400), random(0,400)));
        }

    }
    
}
   

function draw(){
    background(0);

    Engine.update(engine);

    for(var i = 0; i<maxDrops; i++){
       rain[i].showDrop();
        rain[i].updateY()
        
    }
    drawSprites();
}   

