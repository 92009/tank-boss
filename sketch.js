var bImg,tImg,oImg,blImg,gaImg;
var fireGroup,tankGroup,coinGroup,blGroup;
var burSound;
var cImg;
var score=0;
var coin=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
function preload(){
bImg=loadImage("f.jpg")
tImg=loadImage("t.png")
oImg=loadImage("t2.png")
fImg=loadImage("f.png")
cImg=loadImage("c.png")
blImg=loadImage("bl.png")
gaImg=loadImage("ga.png ")
burSound=loadSound("burst.mp3")
}

function setup() {
 createCanvas(1000,1000)
 bc=createSprite(600,400)
 bc.addImage(bImg)
 bc.scale=2.1
 bc.velocityX=-5

 ta=createSprite(200,750)
 ta.addImage(tImg)
 ta.scale=0.2

 bond=createSprite(600,870,1500,50)
bond.visible=false;


 fireGroup=new Group()
 tankGroup=new Group()
 coinGroup=new Group()
 blGroup=new Group()
  
}

function draw() {

if(gameState===PLAY)
{

  if(bc.x<300)
{
 bc.x=width/2
}
  ta.collide(bond)
  if (keyDown("space")) {
    createFire();    
  }

  if (tankGroup.isTouching(fireGroup))
  {
      tankGroup.destroyEach();
  score=score+1
  }

  if(coinGroup.isTouching(ta))
  {
    coinGroup.destroyEach();
    coin=coin+1
  }
if(keyDown("enter"))
{
  ta.velocityY=-10;
}
if(ta.y<200)
{
  ta.velocityY = ta.velocityY + 5.8;
}

if(blGroup.isTouching(ta))
{
  gameState=END
 
}





 createBomb(); 
 createCoin(); 
 createTank();

}


else if(gameState===END){
  blGroup.destroyEach();

  ga=createSprite(500,250)
  ga.addImage(gaImg)
  ga.scale=1.5
coinGroup.destroyEach();
blGroup.destroyEach();
tankGroup.destroyEach();
c.velocityX=0
bl.velocityX=0
tn.velocityX=0
bc.velocityX=0
ta.scale=0
}

 drawSprites();

 textStyle("bold")
 textSize(40)
 fill("blue")
 text("SCORE:"+score,10,50)

 textStyle("bold")
 textSize(40)
 fill("red")
 text("COIN:"+coin,10,100)
}


function createTank()
{
  var rand=Math.round(random(50,10))
  if (frameCount%100===0)
  {  
  tn=createSprite(random(900,10),770,99)
  tn.addImage(oImg);
  tn.scale=1.1;
  tn.velocityX=-5;
  tankGroup.add(tn)
}
}

function createFire() {
    var f= createSprite(100, 50, 60, 10);
    f.addImage(fImg);
    f.x = 400;
    f.y=710;
    f.velocityX = 9;
    f.lifetime = 100;
    f.scale = 0.5;
    burSound.play();
    fireGroup.add(f);
  }

  function createCoin() {
    var rand=Math.round(random(50,10))
    if (frameCount%100===0)
    {
    c=createSprite(random(900,10),200,750)
    c.addImage(cImg)
    c.scale=0.3    
    c.velocityX = -9;
    c.lifetime = 100;
    coinGroup.add(c);
    }
    }

    function createBomb()
{
  var rand=Math.round(random(50,10))
  if (frameCount%100===0)
  {  
  bl=createSprite(random(900,10),270,99)
  bl.addImage(blImg);
  bl.scale=0.5;
  bl.velocityX=-7;
  blGroup.add(bl);
 
}
}