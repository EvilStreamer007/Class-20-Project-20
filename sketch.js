
var wall1,wall2,wall3,wall4,car1,car2,car3,car4;
var speed1,speed2,speed3,speed4,weight1,weight2,weight3,weigth4;
var divider1,divider3,divider3;

function setup() {
  createCanvas(1600,420);

  speed1 = random(55,90);
  weight1 = random(400,1500);
  car1 = createSprite(1400, 40, 50, 50);
  divider1 = createSprite(1400,120,3000,5)
  divider1.shapeColor = ("cyan");
  car1.velocityX = -speed1;
  wall1 = createSprite(100,60,60,90);
  wall1.shapeColor = rgb(80,80,80);

  speed2 = random(55,90);
  weight2 = random(400,1500);
  car2 = createSprite(1400, 150, 50, 50);
  divider2 = createSprite(1400,220,3000,5)
  divider2.shapeColor = ("cyan");
  car2.velocityX = -speed2;
  wall2 = createSprite(100,170,60,90);
  wall2.shapeColor = rgb(80,80,80);

  speed3 = random(55,90);
  weight3 = random(400,1500);
  car3 = createSprite(1400, 250, 50, 50);
  divider1 = createSprite(1400,320,3000,5)
  divider1.shapeColor = ("cyan");
  car3.velocityX = -speed3;
  wall3 = createSprite(100,270,60,90);
  wall3.shapeColor = rgb(80,80,80);

  speed4 = random(55,90);
  weight4 = random(400,1500);
  car4 = createSprite(1400, 350, 50, 50);;
  car4.velocityX = -speed4;
  wall4 = createSprite(100,370,60,90);
  wall4.shapeColor = rgb(80,80,80);
}

function draw() {
  background(0);  

  if( car1.x - wall1.x < car1.width/2 + wall1.width/2){
     car1.velocityX = 0;
     var deformation = (0.5 * weight1 * speed1 * speed1) / 22500

    if(deformation <= 100){
       car1.shapeColor = rgb(0,255,0);
    }

    if(deformation > 180){
       car1.shapeColor = rgb(230,230,0);
    }

    if(deformation > 100 && deformation <= 180){
       car1.shapeColor = rgb(255,0,0);
    }
  }

  if( car2.x - wall2.x < car2.width/2 + wall2.width/2){
      car2.velocityX = 0;
      var deformation = (0.5 * weight1 * speed1 * speed1) / 22500

  if(deformation < 100){
     car2.shapeColor = rgb(0,255,0);
  }

  if(deformation > 180){
     car2.shapeColor = rgb(255,0,0);
  }

  if(deformation >= 180 && deformation >= 100){
     car2.shapeColor = rgb(230,230,0);
  }
}

if( car3.x - wall3.x < car3.width/2 + wall3.width/2){
    car3.velocityX = 0;
    var deformation = (0.5 * weight1 * speed1 * speed1) / 22500

  if(deformation < 100){
     car3.shapeColor = rgb(0,255,0);
  }

  if(deformation > 180){
     car3.shapeColor = rgb(255,0,0);
  }

  if(deformation >= 180 && deformation >= 100){
     car3.shapeColor = rgb(230,230,0);
  }
}

if( car4.x - wall4.x < car4.width/2 + wall4.width/2){
    car4.velocityX = 0;
    var deformation = (0.5 * weight1 * speed1 * speed1) / 22500

  if(deformation < 100){
     car4.shapeColor = rgb(0,255,0);
  }

  if(deformation > 180){
     car4.shapeColor = rgb(255,0,0);
  }

  if(deformation >= 180 && deformation >= 100){
     car4.shapeColor = rgb(230,230,0);
  }
}

  drawSprites();
}