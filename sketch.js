
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var block1,block2,block3,block4;
var paddle1;
var rand;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
rand = Math.round(random(1,5))
 
   if(rand === 1){
    block2 = new Block(240,100,150,30)
    block3 = new Block(400,100,150,30)
    block4 = new Block(560,100,150,30)
    block1 = new Block(720,100,150,30)
  }
  if(rand === 2){
    block1 = new Block(80,100,150,30)
    block3 = new Block(400,100,150,30)
    block4 = new Block(560,100,150,30)
    block2 = new Block(720,100,150,30)
  }
 
  if(rand === 3){
    block2 = new Block(240,100,150,30)
    block1 = new Block(80,100,150,30)
    block4 = new Block(560,100,150,30)
    block3 = new Block(720,100,150,30)
  }
 
  if(rand ===4){
    block2 = new Block(240,100,150,30)
    block3 = new Block(400,100,150,30)
    block1 = new Block(80,100,150,30)
    block4 = new Block(720,100,150,30)
  }
  if(rand === 5){
    block2 = new Block(240,100,150,30)
    block3 = new Block(400,100,150,30)
    block4 = new Block(560,100,150,30)
    block1 = new Block(80,100,150,30)
  }

  
 
paddle1 = new Paddle(400,380,50,10)
}

function draw() {
  background(150); 
  Engine.update(engine) ;
  
 
   
  if(rand = 1){
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  }
if(rand = 2){
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  }
  if(rand = 3){
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  }
if(rand = 4){
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  }
if(rand != 5){
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  }
  

  paddle1.display();
 if(isTouching(block1.body,paddle1.body)===true ) {
  
 }
}

function mouseDragged(){
Matter.Body.setPosition(paddle1.body,{x:mouseX,y:380})
}
