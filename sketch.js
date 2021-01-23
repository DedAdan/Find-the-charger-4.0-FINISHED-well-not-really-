var apple
var battery,battery2,battery3,battery4,battery5
var count=0
var ground, groundImage
var edges
var wall1, wall2, wall3, wall4, wall5, wall6
var wallsGroup;
var charger, chargerImage
var iphoneImage
var android, androidImage
function setup() {
  createCanvas(1200,600);
  edges=createEdgeSprites()
  apple=createSprite(100, 350, 50, 50);
  apple.addImage(iphoneImage)
  apple.scale=.5
  ground=createSprite(600, 580, 1200, 20);
  ground.addImage(groundImage)
  ground.scale=1
  wall1=createSprite(360,490,150,50)
  wall2=createSprite(605,490,150,200)
  wall3=createSprite(450,70,100,400)
  wall4=createSprite(480,280,165,30)
  wall5=createSprite(860,220,165,30)
  wall6=createSprite(1200,300,500,30)
  charger=createSprite(1150,270,80,30)
  charger.addImage(chargerImage)
  charger.scale=.3
  android=createSprite(1040,220,50,50)
  android.addImage(androidImage)
  android.scale=.1
  battery=createSprite(100,50,130,50)
  battery2=createSprite(100,50,100,50)
  battery3=createSprite(100,50,70,50)
  battery4=createSprite(100,50,40,50)
  battery5=createSprite(100,50,10,50)
  wallsGroup = new Group();
  wallsGroup.add(ground)
  wallsGroup.add(wall1);
  wallsGroup.add(wall2);
  wallsGroup.add(wall3);
  wallsGroup.add(wall4);

}
function preload(){
  chargerImage=loadImage("images/charger.png")
  iphoneImage=loadImage("images/iphone4.png")
  groundImage=loadImage("images/groun from bfdi,.png")
  androidImage=loadImage("images/android_logo_PNG17.png")
}

function draw() {
  background(255,255,255);
apple.bounceOff(edges)
if(apple.isTouching(android)){
  count=count+.5
  apple.bounceOff(android)
  switch(count){
    case 1: battery.destroy()
    break;
case 2: battery2.destroy()
    break;
case 3: battery3.destroy()
    break;
case 4: battery4.destroy()
    break;
case 5: battery5.destroy()
    break;
default: break;
  }
}

  if(keyDown("a")){
  apple.x=apple.x-5
  }  
  if(keyDown("d")){
    apple.x=apple.x+5
    }  
    if(keyWentDown("w")){
      apple.velocityY= -15
      console.log("inside W")
   }  
   if(keyWentDown("w")&&(keyDown("d"))){
    apple.velocityY= -15
    apple.x=apple.x+5
 }  
 if(keyWentDown("w")&&(keyDown("a"))){
  apple.velocityY= -15
  apple.x=apple.x-5
}  


   apple.velocityY = apple.velocityY + 0.8
   apple.collide(ground);
   apple.collide(wall1);
   apple.collide(wall2);
   apple.collide(wall3);
   apple.collide(wall4);
   apple.collide(wall5);
   apple.collide(wall6);
  drawSprites();
}