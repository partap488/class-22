var fixed,moving




function setup() {



  createCanvas(800,400);
  fixed=createSprite(600, 100, 50, 80);  
fixed.shapeColor="red"

moving=createSprite(600,600,80,30)
moving.shapeColor="red"

}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX
  moving.y=World.mouseY
  if(moving.x-fixed.x<moving.width/2+fixed.width/2&&
   fixed.x-moving.x<moving.width/2+fixed.width/2&& 
   moving.y-fixed.y<moving.height/2+fixed.height/2&&
   fixed.y-moving.y<moving.height/2+fixed.height/2){
     
    moving.shapeColor="blue"
    fixed.shapeColor="blue"
    
   }
else{
  fixed.shapeColor="red"
  moving.shapeColor="red"
}

  
  drawSprites();
}