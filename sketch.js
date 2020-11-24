var car1,wall1;
var car2,wall2;
var car3,wall3;
var car4,wall4;
var speed1,weight1;
var speed2,weight2;
var speed3,weight3;
var speed4,weight4;

function setup() {
  createCanvas(1600,400);

  speed1 = random(55,90);
  weight1 = random(400,1500);

  speed2 = random(55,90);
  weight2 = random(400,1500);

  speed3 = random(55,90);
  weight3 = random(400,1500);

  speed4 = random(55,90);
  weight4 = random(400,1500);

  car1 = createSprite(100,50,30,30);
  car1.velocityX = speed1/10;
  wall1 = createSprite(1500,50,10,70);

  car2 = createSprite(100,150,30,30);
  car2.velocityX = speed2/10;
  wall2 = createSprite(1500,150,10,70);

  car3 = createSprite(100,250,30,30);
  car3.velocityX = speed3/10;
  wall3 = createSprite(1500,250,10,70);

  car4 = createSprite(100,350,30,30);
  car4.velocityX = speed4/10;
  wall4 = createSprite(1500,350,10,70);

  
}

function draw() {
  background(255,255,255);  

  if(wall1.x - car1.x < (car1.width + wall1.width)/2){
  car1.velocityX = 0;
  var deformation = 0.5 * weight1 * speed1 * speed1 /22500;
  if(deformation > 180){
  car1.shapeColor = color(255,0,0);
  }
  if(deformation > 100 && deformation < 180){
  car1.shapeColor = color(230,230,0);
  }
  if(deformation < 100){
  car1.shapeColor = color(0,255,0);
  }
   
  }

  if(wall2.x - car2.x < (car2.width + wall2.width)/2){
  car2.velocityX = 0;
  var deformation = 0.5 * weight2 * speed2 * speed2 /22500;
  if(deformation > 180){
  car2.shapeColor = color(255,0,0);
  }
  if(deformation > 100 && deformation < 180){
  car2.shapeColor = color(230,230,0);
  }
  if(deformation < 100){
  car2.shapeColor = color(0,255,0);
  }
   
  }

  if(wall3.x - car3.x < (car3.width + wall3.width)/2){
  car3.velocityX = 0;
  var deformation = 0.5 * weight3 * speed3 * speed3 /22500;
  if(deformation > 180){
  car3.shapeColor = color(255,0,0);
  }
  if(deformation > 100 && deformation < 180){
  car3.shapeColor = color(230,230,0);
  }
  if(deformation < 100){
  car3.shapeColor = color(0,255,0);
  }
        
  }

  if(wall4.x - car4.x < (car4.width + wall4.width)/2){
  car4.velocityX = 0;
  var deformation = 0.5 * weight4 * speed4 * speed4 /22500;
  if(deformation > 180){
  car4.shapeColor = color(255,0,0);
  }
  if(deformation > 100 && deformation < 180){
  car4.shapeColor = color(230,230,0);
  }
  if(deformation < 100){
  car4.shapeColor = color(0,255,0);
  }
          
  }

  drawSprites();
}