var lizard,lizardImage,bgImage,lizaImage,liza,eggImage,egg
var slizaI
function preload(){
  lizardImage=loadImage("lizard.png")
  bgImage=loadImage("bg.png")
  lizaImage=loadImage("liza.png")
  eggImage=loadImage("egg.png")
  slizaI=loadImage("liza.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-110);

  lizard=createSprite(displayWidth/2+400,displayHeight/2)
  lizard.addImage("lizard",lizardImage)
  liza=createSprite(displayWidth/2-400,displayHeight/2)
  liza.addImage("liza",lizaImage)
  liza.visible=false
  
  edges=createEdgeSprites()
}

function draw() {
  background(bgImage); 
  lizard.collide(edges)
  
  if(keyDown(LEFT_ARROW)) {
    lizard.x=lizard.x-5
  }
  if(keyDown(RIGHT_ARROW)) {
    lizard.x=lizard.x+5
  }
  if(lizard.x<=92.5)    
  {
   liza.visible=true
   lizard.visible=false
   
   if(keyDown(ENTER)){
    //egg.visible=true
   slizard()
   
   }
   
  }
  //egg.lifetime=10
 
  
  drawSprites();
}
function slizard(){

  if(frameCount%20===0){
    egg=createSprite(displayWidth/2-400,displayHeight/2+40)
    egg.addImage("egg",eggImage)
     // egg.visible=false
  egg.scale=0.08
  egg.lifetime=100
  console.log(egg.lifetime)
  if(egg.lifetime===0){
    
    console.log("its Working")

    sliza=createSprite(displayWidth/2-400,displayHeight/2+40)
   // sliza.addImage("lizard1",lizardImage);
   // sliza.addImage("liza2",lizaImage)
  /*  var rand=Math.round(random(1,2))
    switch(rand){
      case 1:sliza.addImage("lizard1",lizardImage);
      sliza.scale=0.5;
      break;
      case 2: sliza.addImage("liza2",lizaImage)
      sliza.scale=0.5;
      break;
      default: break;
    }  */                      
  }
  
  }
}