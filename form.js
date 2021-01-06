class Form{
    constructor() {
        this.title = createElement('h2');

        this.input = createInput("Continent");
       this.input1 = createInput("State/City");

        this.button = createButton('Click Here To Search');

        this.reset = createButton('Reset') 
      }
      hide(){
        this.button.hide();
        this.input.hide();
       this.input1.hide();
        this.title.hide();
      }
      display(){
        background(blueIMG)
        this.title.html("World Wide Clock");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
   this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 50);
    this.button.position(displayWidth/2 - 35, displayHeight/2- 10);
    
this.reset.position(displayWidth-700, 50)

this.reset.mousePressed(()=>{
  
  })
  
//button = "click here to search"
  this.button.mousePressed(()=>{
    this.input.hide();
    this.input1.hide();
    this.button.hide();

    place = this.input.value();
    place1 = this.input1.value();

    gameState=1
    console.log(place)
console.log(place1)

  });

  this.reset.mousePressed(()=>{
    gameState= 0
    form = new Form()
    form.display()
  });
  
      }
      
}