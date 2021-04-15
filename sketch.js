var bullet, Wall,thickness;
var speed, weight,damage;

function setup() {
  createCanvas(1600,400);
 
  speed=random(223,331);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,100,50);
  bullet.velocityX = speed;
  Wall=createSprite(1200,200,thickness,height/2); 
  Wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);


  if(hasCollided(bullet,Wall)){
    bullet.velocityX=0;
     var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
    Wall.shapeColor=color(255,0,0);
    }
     if(damage<10){
    Wall.shapeColor=color(0,255,0);
     }
    }
     
    drawSprites();

}

function hasCollided(lbullet, lwall){

bulletRightEdge = lbullet.x + lbullet.width;
WallLeftEdge = lwall.x;
  if(bulletRightEdge>=WallLeftEdge){
    return true;
  }
  return false;
 }
 
