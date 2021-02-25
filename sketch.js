
gameState = 0
var score = 0

function preload(){
cubertImg = loadImage("images/cubert.png")
squareImg = loadImage("images/Square.png")
spikeImg = loadImage("images/spike.png")
BossImg = loadImage("images/Boss 2.png")
startButtonImg = loadImage("images/play button.png")
ShotImg = loadImage("images/circle.png")
}
function setup(){
    createCanvas(displayWidth-4,displayHeight-83)

    cubert = createSprite(displayWidth%2+70,displayHeight%2+400)
    cubert.addImage(cubertImg)
    cubert.scale = 0.2

    startButton = createSprite(700,420,10,10)
    startButton.addImage(startButtonImg)
    startButton.scale = 1.0

    Boss = createSprite(1250,400)
    Boss.addImage(BossImg)
    Boss.scale = 0.4
    Boss.velocityY = 4

    Shot = createSprite(displayWidth%2+120,displayHeight%2+400)
    Shot.addImage(ShotImg)
    Shot.scale = -0.03
    


    laser1Group = new Group()
    laserTopGroup= new Group()
    laser2Group = new Group()




   // square = createSprite(displayWidth-250,displayHeight+200)
    //square.addImage(squareImg)



      //worm 1
      spike1 = createSprite(200,100,10,10)
      spike1.velocityX = 10
      spike1.velocityY = 10
      spike1.scale = 0.4
      spike1.addImage(spikeImg)
  
      spike2 = createSprite(250,150,10,10)
      spike2.velocityX = 10
      spike2.velocityY = 10
      spike2.scale = 0.4
      spike2.addImage(spikeImg)
  
      spike3 = createSprite(300,200,10,10)
      spike3.velocityX = 10
      spike3.velocityY = 10
      spike3.scale = 0.4
      spike3.addImage(spikeImg)
  
      spike4 = createSprite(350,250,10,10)
      spike4.velocityX = 10
      spike4.velocityY = 10
      spike4.scale = 0.4
      spike4.addImage(spikeImg)
  
      spike5 = createSprite(400,300,10,10)
      spike5.velocityX = 10
      spike5.velocityY = 10
      spike5.scale = 0.4
      spike5.addImage(spikeImg)
  
      //worm 2
      spike6 = createSprite(600,100,10,10)
      spike6.velocityX = -10
      spike6.velocityY = -10
      spike6.scale = 0.4
      spike6.addImage(spikeImg)
  
      spike7 = createSprite(650,150,10,10)
      spike7.velocityX = -10
      spike7.velocityY = -10
      spike7.scale = 0.4
      spike7.addImage(spikeImg)
  
      spike8 = createSprite(700,200,10,10)
      spike8.velocityX = -10
      spike8.velocityY = -10
      spike8.scale = 0.4
      spike8.addImage(spikeImg)
  
      spike9 = createSprite(750,250,10,10)
      spike9.velocityX = -10
      spike9.velocityY = -10
      spike9.scale = 0.4
      spike9.addImage(spikeImg)
  
      spike10 = createSprite(800,300,10,10)
      spike10.velocityX = -10
      spike10.velocityY = -10
      spike10.scale = 0.4
      spike10.addImage(spikeImg)
  
      //worm 3
      spike11 = createSprite(500,600,10,10)
      spike11.velocityX = 10
      spike11.velocityY = -10
      spike11.scale = 0.4
      spike11.addImage(spikeImg)
  
      spike12 = createSprite(550,550,10,10)
      spike12.velocityX = 10
      spike12.velocityY = -10
      spike12.scale = 0.4
      spike12.addImage(spikeImg)
  
      spike13 = createSprite(600,500,10,10)
      spike13.velocityX = 10
      spike13.velocityY = -10
      spike13.scale = 0.4
      spike13.addImage(spikeImg)
  
      spike14 = createSprite(650,450,10,10)
      spike14.velocityX = 10
      spike14.velocityY = -10
      spike14.scale = 0.4
      spike14.addImage(spikeImg)
  
      spike15 = createSprite(700,400,10,10)
      spike15.velocityX = 10
      spike15.velocityY = -10
      spike15.scale = 0.4
      spike15.addImage(spikeImg)

      edges = createEdgeSprites()

    



}

function draw() {
    background("Black")
    edges = createEdgeSprites()


    if(gameState === 0){
//worm 1
spike1.bounceOff(edges[0]);
spike1.bounceOff(edges[1]);
spike1.bounceOff(edges[2]);
spike1.bounceOff(edges[3]);

spike2.bounceOff(edges[0]);
spike2.bounceOff(edges[1]);
spike2.bounceOff(edges[2]);
spike2.bounceOff(edges[3]);

spike3.bounceOff(edges[0]);
spike3.bounceOff(edges[1]);
spike3.bounceOff(edges[2]);
spike3.bounceOff(edges[3]);

spike4.bounceOff(edges[0]);
spike4.bounceOff(edges[1]);
spike4.bounceOff(edges[2]);
spike4.bounceOff(edges[3]);

spike5.bounceOff(edges[0]);
spike5.bounceOff(edges[1]);
spike5.bounceOff(edges[2]);
spike5.bounceOff(edges[3]);

//worm 2
spike6.bounceOff(edges[0]);
spike6.bounceOff(edges[1]);
spike6.bounceOff(edges[2]);
spike6.bounceOff(edges[3]);

spike7.bounceOff(edges[0]);
spike7.bounceOff(edges[1]);
spike7.bounceOff(edges[2]);
spike7.bounceOff(edges[3]);

spike8.bounceOff(edges[0]);
spike8.bounceOff(edges[1]);
spike8.bounceOff(edges[2]);
spike8.bounceOff(edges[3]);

spike9.bounceOff(edges[0]);
spike9.bounceOff(edges[1]);
spike9.bounceOff(edges[2]);
spike9.bounceOff(edges[3]);

spike10.bounceOff(edges[0]);
spike10.bounceOff(edges[1]);
spike10.bounceOff(edges[2]);
spike10.bounceOff(edges[3]);

//worm 3
spike11.bounceOff(edges[0]);
spike11.bounceOff(edges[1]);
spike11.bounceOff(edges[2]);
spike11.bounceOff(edges[3]);

spike12.bounceOff(edges[0]);
spike12.bounceOff(edges[1]);
spike12.bounceOff(edges[2]);
spike12.bounceOff(edges[3]);

spike13.bounceOff(edges[0]);
spike13.bounceOff(edges[1]);
spike13.bounceOff(edges[2]);
spike13.bounceOff(edges[3]);

spike14.bounceOff(edges[0]);
spike14.bounceOff(edges[1]);
spike14.bounceOff(edges[2]);
spike14.bounceOff(edges[3]);

spike15.bounceOff(edges[0]);
spike15.bounceOff(edges[1]);
spike15.bounceOff(edges[2]);
spike15.bounceOff(edges[3]);

Boss.bounceOff(edges[2])
Boss.bounceOff(edges[3])




textSize(40)
fill("white")
text("Use the UP,DOWN,LEFT,RIGHT arrow keys to move",250,650)
text("Press 'S' to shoot (Dont move while shooting)",300,750)

    
    if(mousePressedOver(startButton)){
      gameState = 1
      startButton.visible = false
    }
  }
    else if (gameState === 1){
    
      Boss.bounceOff(edges[2])
      Boss.bounceOff(edges[3])

   // laser()
   if (frameCount %100 === 0){
    laser1 = createSprite(displayWidth-20,random(displayHeight-50,displayHeight-100),10,displayHeight-260)
   laser1.velocityX = -3
   laser1.shapeColor = "red"
   laser1Group.add(laser1)
   
  
   
   var laserTop = createSprite(displayWidth-20,random(10,80),10,displayHeight-260)
   laserTop.velocityX = -3
   laserTop.shapeColor = "red"
   laserTopGroup.add(laserTop)


 
 }
 if(frameCount %100 === 0){
   //var laser2 = createSprite(displayWidth%2-200,random(displayHeight-250,displayHeight-300,7,displayHeight-280))
   var laser2 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
   laser2.velocityX = -5
   laser2.shapeColor = "green"
   laser2Group.add(laser2)

   var laser3 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
   laser3.velocityX = -5
   laser3.shapeColor = "red"

   var laser4 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
   laser4.velocityX = -5
   laser4.shapeColor = "red"

   var laser5 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
   laser5.velocityX = -5
   laser5.shapeColor = "red"

   var laser6 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
   laser6.velocityX = -5
   laser6.shapeColor = "red"

   var laserFalling1 = createSprite(displayWidth-1000,random(20,20),10,200)
   laserFalling1.velocityY = +5
   laserFalling1.shapeColor = "red"

   var laserFalling2 = createSprite(displayWidth-800,random(20,20),10,200)
   laserFalling2.velocityY = +5
   laserFalling2.shapeColor = "red"

   var laserFalling3 = createSprite(displayWidth-600,random(20,20),10,200)
   laserFalling3.velocityY = +5
   laserFalling3.shapeColor = "red"

   var laserFalling4 = createSprite(displayWidth-400,random(20,20),10,200)
   laserFalling4.velocityY = +5
   laserFalling4.shapeColor = "red"

   Boss.depth = laser1.depth 
   Boss.depth = laser2.depth
   Boss.depth = Boss.depth +1

if(laser1Group.isTouching(cubert) || laserTopGroup.isTouching(cubert) || laser2Group.isTouching(cubert)){
score = score-1
}




 }



    if (keyDown("left")) {
      cubert.x = cubert.x-10; 
      Shot.x = cubert.x   
}
    if (keyDown("right")) {
        cubert.x = cubert.x+10;
        Shot.x = cubert.x 
}
    if (keyDown("up")) {
        cubert.y = cubert.y-10;
        Shot.y = cubert.y 
}
    if (keyDown("down")) {
        cubert.y = cubert.y+10;
        Shot.y = cubert.y 
}
if (keyDown("s")) {
  Shot.x = Shot.x +10 
}
//cubert
cubert.bounceOff(edges[0]);
cubert.bounceOff(edges[1]);
cubert.bounceOff(edges[2]);
cubert.bounceOff(edges[3]);

//worm 1
spike1.bounceOff(edges[0]);
spike1.bounceOff(edges[1]);
spike1.bounceOff(edges[2]);
spike1.bounceOff(edges[3]);

spike2.bounceOff(edges[0]);
spike2.bounceOff(edges[1]);
spike2.bounceOff(edges[2]);
spike2.bounceOff(edges[3]);

spike3.bounceOff(edges[0]);
spike3.bounceOff(edges[1]);
spike3.bounceOff(edges[2]);
spike3.bounceOff(edges[3]);

spike4.bounceOff(edges[0]);
spike4.bounceOff(edges[1]);
spike4.bounceOff(edges[2]);
spike4.bounceOff(edges[3]);

spike5.bounceOff(edges[0]);
spike5.bounceOff(edges[1]);
spike5.bounceOff(edges[2]);
spike5.bounceOff(edges[3]);

//worm 2
spike6.bounceOff(edges[0]);
spike6.bounceOff(edges[1]);
spike6.bounceOff(edges[2]);
spike6.bounceOff(edges[3]);

spike7.bounceOff(edges[0]);
spike7.bounceOff(edges[1]);
spike7.bounceOff(edges[2]);
spike7.bounceOff(edges[3]);


spike8.bounceOff(edges[0]);
spike8.bounceOff(edges[1]);
spike8.bounceOff(edges[2]);
spike8.bounceOff(edges[3]);


spike9.bounceOff(edges[0]);
spike9.bounceOff(edges[1]);
spike9.bounceOff(edges[2]);
spike9.bounceOff(edges[3]);


spike10.bounceOff(edges[0]);
spike10.bounceOff(edges[1]);
spike10.bounceOff(edges[2]);
spike10.bounceOff(edges[3]);

//worm 3
spike11.bounceOff(edges[0]);
spike11.bounceOff(edges[1]);
spike11.bounceOff(edges[2]);
spike11.bounceOff(edges[3]);

spike12.bounceOff(edges[0]);
spike12.bounceOff(edges[1]);
spike12.bounceOff(edges[2]);
spike12.bounceOff(edges[3]);


spike13.bounceOff(edges[0]);
spike13.bounceOff(edges[1]);
spike13.bounceOff(edges[2]);
spike13.bounceOff(edges[3]);

spike14.bounceOff(edges[0]);
spike14.bounceOff(edges[1]);
spike14.bounceOff(edges[2]);
spike14.bounceOff(edges[3]);


spike15.bounceOff(edges[0]);
spike15.bounceOff(edges[1]);
spike15.bounceOff(edges[2]);
spike15.bounceOff(edges[3]);





console.log(displayHeight,displayWidth)

}
    drawSprites()
    textSize(40)
    fill("white")
    text("Score: "+score,600,100)

    

  
} 

function laser(){
  if (frameCount %100 === 0){
     laser1 = createSprite(displayWidth-20,random(displayHeight-50,displayHeight-100),10,displayHeight-260)
    laser1.velocityX = -3
    laser1.shapeColor = "red"

    var laserTop = createSprite(displayWidth-20,random(10,80),10,displayHeight-260)
    laserTop.velocityX = -3
    laserTop.shapeColor = "red"

  
  }
  if(frameCount %100 === 0){
    //var laser2 = createSprite(displayWidth%2-200,random(displayHeight-250,displayHeight-300,7,displayHeight-280))
    var laser2 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
    laser2.velocityX = -5
    laser2.shapeColor = "red"

    var laser3 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
    laser3.velocityX = -5
    laser3.shapeColor = "red"

    var laser4 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
    laser4.velocityX = -5
    laser4.shapeColor = "red"

    var laser5 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
    laser5.velocityX = -5
    laser5.shapeColor = "red"

    var laser6 = createSprite(displayWidth-10,random(10,displayHeight-10),200,10)
    laser6.velocityX = -5
    laser6.shapeColor = "red"

    var laserFalling1 = createSprite(displayWidth-1000,random(20,20),10,200)
    laserFalling1.velocityY = +5
    laserFalling1.shapeColor = "red"

    var laserFalling2 = createSprite(displayWidth-800,random(20,20),10,200)
    laserFalling2.velocityY = +5
    laserFalling2.shapeColor = "red"

    var laserFalling3 = createSprite(displayWidth-600,random(20,20),10,200)
    laserFalling3.velocityY = +5
    laserFalling3.shapeColor = "red"

    var laserFalling4 = createSprite(displayWidth-400,random(20,20),10,200)
    laserFalling4.velocityY = +5
    laserFalling4.shapeColor = "red"

    var laserFalling5 = createSprite(displayWidth-200,random(20,20),10,200)
    laserFalling5.velocityY = +5
    laserFalling5.shapeColor = "red"






  }
}





