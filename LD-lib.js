console.log("LD-lib is loaded"); //says to the console, if the library is loaded

//This library is made by Lukas and David

//anonymous contributor from web
function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function TestLD() {
  console.log("working");
}

//creates a canvas with other stuff
function pageCanvasLD(w, h) {
  var beforeC = createDiv(); //Before Canvas
  var WithC = createDiv(); //With Canvas
  var AfterC = createDiv(); //After Canvas
  var opgaver = 0;

  //Creates a button to go to the task before
  var ButtonBefore = createButton("<").parent(beforeC);
  ButtonBefore.mousePressed(before);
  ButtonBefore.style("height", h + "px");
  ButtonBefore.style("width", "4em");

  //Create canvas
  var Canvas = createCanvas(w, h).parent(WithC);
  background(220);

  //Creates a button to go to the next task
  var ButtonNext = createButton(">").parent(AfterC);
  ButtonNext.mousePressed(next);
  ButtonNext.style("height", h + "px");
  ButtonNext.style("width", "4em");

  var h1 = createElement("h1", "Opgave " + opgaver).parent(WithC);
  h1.style("text-align", "center");

  //centers all items on body
  document.querySelector("body").style.display = "flex";
  document.querySelector("body").style.justifyContent = "center";

  function next() {
    //go to next task
    background(220);
    fill(255);
    stroke(0);
    strokeWeight(1);
    opgaver++;
    opgave(opgaver);
    h1.html("Opgave " + opgaver);
  }

  function before() {
    //go to task before
    background(220);
    fill(255);
    stroke(0);
    strokeWeight(1);
    opgaver--;
    opgave(opgaver);
    h1.html("Opgave " + opgaver);
  }

  function opgave(x) {
    //calling task
    var NumberOfTask = x;
    var methodprefix = "opgave";

    try {
      window[methodprefix + NumberOfTask]();
    } catch (err) {
      console.log("failed to call opgave " + x);
    }
  }
}

function randomColor() {
  var colorArray = [];
  for (let i = 0; i < 3; i++) {
    var randomNumber = random(0, 255);
    colorArray.push(Math.ceil(randomNumber));
  }
  colorArray.join();
  result = "rgb" + "(" + colorArray + ")";
  return result;
}

function grafferLD (){
  /**
   * 
   * @param {number} Width 
   * @param {number} Height 
   * @param {number} LocationX 
   * @param {number} LocationY 
   * @param {function[]} Calculations 
   * @param {boolean[]} Operations 
   * @param {number} Density 
   */
  this.start = function (Width, Height, LocationX, LocationY, Calculations, Operations, Density) { //skal laves helt om
    
    this.Gwidth = Width
    this.Gheight = Height
    this.locationX = LocationX
    this.locationY = LocationY
    this.calculations = Calculations
    this.operations = Operations
    this.density = Density

    fill(80)
    noStroke()
    rect(this.locationX,this.locationY,this.Gwidth,this.Gheight)
    this.y = 0; 
    this.x = -this.Gwidth/2; 
    this.runNumber = 0; 
    this.colR = 255; 
    this.colG = 0; 
    this.colB = 0; 
    this.action = 0;
    
    this.LI = this.Gwidth/100

    console.log( this.Gwidth, this.Gheight, this.locationX, this.locationY, this.calculations, this.operations, this.density, this.y, this.x, this.runNumber, this.colR, this.colG, this.colB, this.action, this.LI,)

    this.reset
    stroke(255)
    strokeWeight(this.LI)
    line(this.Gwidth/2+this.locationX, this.Gheight-(this.Gheight/30)+this.locationY, this.Gwidth/2+this.locationX, (this.Gheight/30)+this.locationY)
    line(this.Gwidth-(this.Gwidth/40)+this.locationX, this.Gheight/2+this.locationY, (this.Gwidth/40)+this.locationX, this.Gheight/2+this.locationY)
    }
  


  this.Gwidth; this.Gheight; this.locationX; this.locationY; this.calculations; this.operations; this.density;
  this.y; this.x; this.runNumber; this.colR; this.colG; this.colB; this.action; this.LI;
  
  this.reset = function () {
    fill(80)
    noStroke()
    rect(this.locationX,this.locationY,this.Gwidth,this.Gheight)
    this.y = 0; 
    this.x = -this.Gwidth/2; 
    this.runNumber = 0; 
    this.colR = 255; 
    this.colG = 0; 
    this.colB = 0; 
    this.action = 0;
  }

  this.pointDraw = function (id,CC){ //makes a point showing where is currently being drawn
    if(this.x>this.Gwidth/2-this.Gwidth/400) return
    if(this.x<-this.Gwidth/2+this.Gwidth/400)return
    
    if(CC) this.y = this.calculations [id](this.x)
    
    if(this.y>this.Gheight/2-this.Gheight/400) return
    if(this.y<-this.Gheight/2+this.Gheight/400) return
    
    strokeWeight(this.LI/3)
    point(this.x+this.Gwidth/2+this.locationX,-this.y+this.Gheight/2+this.locationY)
    
    //draws lines on x and y for drawn point
    stroke(this.colR, this.colG, this.colB)
    point(this.x+this.Gwidth/2+this.locationX,this.Gheight/2+this.locationY)
    point(this.Gwidth/2+this.locationX,-this.y+this.Gheight/2+this.locationY)
    strokeWeight(this.LI)
    stroke(0)
  }

  this.pointMove = function(){
    console.log(this.x,"x")
    if(this.x<this.Gwidth/2){
      if(this.runNumber>15){
      this.x+=int(this.Gwidth/(this.runNumber*this.density*(this.Gheight/50)))
      }else{
        this.x+=int(this.Gwidth/(this.runNumber*this.density*(this.Gheight/500)))
      }
    }else{
      this.x=-this.Gwidth/2
      this.colorControl()
    }
  }

  this.colorControl = function() {
    this.runNumber++
    console.log(this.runNumber,"runnumber")
    if(typeof(runNumber) != Number) runNumber = 0
    if (this.action < 256) {
      this.colR -= 32
      this.colB += 32
      this.action += 32
    } else if (this.action < 512) {
      this.colB -= 32
      this.colG += 32
      this.action += 32
    } else if (this.action < 768) {
      this.colG -= 32
      this.colR += 32
      this.action += 32
    } else {
      this.action = 0
    }
    this.density += 10
  }

  this.pointDrawMulty = function (id,x){
    console.log(int(id),typeof(id),this.x,typeof(this.x))
    
      this.y = this.calculations[id](true,this.x)
      this.pointDraw(0,false)
      this.y = this.calculations[id](false,this.x)
      this.pointDraw(0,false)
  }
  this.step = function () {
    for(let i = 0; i<this.operations.length; i++){
      if(this.operations [i] == true){
        this.pointDrawMulty(i)
      }else{
        this.pointDraw(i,true)
      }
    }
    this.pointMove()
  }
}