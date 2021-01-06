var form,hour;
var gameState = 0
var place, place1;
var backgroundImg
var bg="images/morning.jpg"
var datetime

function preload(){
  bgd = "images/morning.jpg";
  bgn = "images/night.jpg";
blueIMG = loadImage("images/blue.png")

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  form = new Form()
  background("blue");
  
  
}

function draw() {
  
  background("blue");
  if(gameState === 0){
    background("blue");  

    clear();
    form.display()
   
}

else
    if(gameState === 1){
    changeBg()
    if(backgroundImg)
    background(backgroundImg);  
    
    
    fill("white")
  textSize(30)
  text("The Time Is: "+datetime, displayWidth/2 - 220 , displayHeight/2 - 200)

  }
  
}

async function changeBg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/"+place+"/"+place1);
  var responseJSON = await response.json();

   datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour)
  if(hour>=06 && hour<=19){
      bg =bgd;
  }
  else{
      bg = bgn;
  }
  
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
  
}