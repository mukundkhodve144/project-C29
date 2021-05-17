const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var groundObject,boxObject;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19,box20,box21; 
var box22,box23,box24;
var box25;
var slingshot;
var polygon;
var world;

function preLoad () {
  image = loadImage("sprites/polygon.png");
}

function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    //first pyramid`s ground
    groundObject = new ground(600,650,100,10);
    //second pyramid`s ground
    groundObject2 = new ground(1200,540,200,10);
    //first pyramid
    //level one
    box1 = new box(540,620,20,40);
    box2 = new box(560,620,20,40);
    box3 = new box(580,620,20,40);
    box4 = new box(600,620,20,40);
    box5 = new box(620,620,20,40);
    box6 = new box(640,620,20,40);
    box7 = new box(660,620,20,40);
    //level two
    box8 = new box(560,580,20,40);
    box9 = new box(580,580,20,40);
    box10 = new box(600,580,20,40);
    box11 = new box(620,580,20,40);
    box12 = new box(640,580,20,40);
    //level three
    box13 = new box(580,540,20,40);
    box14 = new box(600,540,20,40);
    box15 = new box(620,540,20,40);
    //level top
    box16 = new box(600,500,20,40);
    //second pyramid 
    //level one
    box17 = new box(1160,500,20,40);
    box18 = new box(1180,500,20,40);
    box19 = new box(1200,500,20,40);
    box20 = new box(1220,500,20,40);
    box21 = new box(1240,500,20,40);
    //level two
    box22 = new box(1180,460,20,40);
    box23 = new box(1200,460,20,40);
    box24 = new box(1220,460,20,40);
    //level top
    box25 = new box(1200,420,20,40);
    //polygon
    polygon = new polygon(150,600,50,50);
    //slingShot
    slingshot = new SlingShot(polygon.body,{x:150, y:600});

    engine = Engine.create();
    world = engine.world;

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1600,
        height: 700,
        wireframes: false
      }
    });

    Engine.run(engine);
    //Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //ground display
  groundObject.display();
  groundObject2.display();
  //box display
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  //polygon display
  polygon.display();
  //slingShot display
  SlingShot.display();

 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed () {

  if (keyCode === 32){
    slingshot.attach(polygon.body);
  }
}


