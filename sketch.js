var wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor(255);

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor(80,80,80);
}

function draw() {
  background("black");
  
  if(wall.x-bullet.x < (car.width+wall.widht)/2)
  {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor(255);
    }
    
    if(deformation<180 && defromation>100)
    {
      bullet.shapeColor(230,230,0);
    }

    if(deformation<100)
    {
      bullet.shapeColor(0,255,0);
    }
  }
  
  drawSprites();
}