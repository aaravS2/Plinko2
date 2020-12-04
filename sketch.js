const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



 var engine,world;
 var particles=[]
 var division=[];
 var object=[]
 
 
function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;
 // for (var i = 100; i<380; i+50) {
    
    
  
particles.push( new Atom(100,100,380))
particles.push(new Atom(50,190,330))
particles.push(new Atom(100,280,380))
particles.push(new Atom(50,370,330))
particles.push(new Atom(100,460,380))
for(var i=0;i<800;i+150){
 division.push(new De(i,650))

  }
  
  

  
}



function draw() {
  background(0);  
  Engine.update(engine)
 
  if(frameCount%60===0){
object.push(new Ob(random(100,380),random(10,50)))
  }
  
  particles[0].display();
  particles[1].display();
  particles[2].display();
  particles[3].display();
  particles[4].display();
 division[0].display();
 object[object.length+1].display()
}
/*async function time(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  back=loadImage(bg);
  console.log(hour);
}*/

