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
      print("failed to call opgave " + x);
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

const graffSaverArray_No_Touch__For_Real__ = []

function grafferLD (Gwidth, Gheight, locationX, locationY, calculations, operations,restart){
  let y, x, runNumber, density, colR, colG, colB, action

  if (reset) for (let i = 0; i<graffSaverArray_No_Touch__For_Real__.length; i++){
  graffSaverArray_No_Touch__For_Real__ [i] = undefined
  }else if (graffSaverArray_No_Touch__For_Real__[-1]){
    let j = 0
    graffSaverArray_No_Touch__For_Real__ [j] = y
    j++
    graffSaverArray_No_Touch__For_Real__ [j] = x
    j++
    graffSaverArray_No_Touch__For_Real__ [j] = runNumber
    j++
    graffSaverArray_No_Touch__For_Real__ [j] = density
    j++
    graffSaverArray_No_Touch__For_Real__ [j] = colR
    j++
    graffSaverArray_No_Touch__For_Real__ [j] = colG
    j++
    graffSaverArray_No_Touch__For_Real__ [j] = colB
    j++
    graffSaverArray_No_Touch__For_Real__ [j] = action
    j++
  }

  function pointDraw(id,CC){ //makes a point showing where is currently being drawn
    if(CC) y = calculations [id]()
    strokeWeight(LI/3)
    point(x+Gwidth/2+locationX,-y+Gheight/2+locationY)
    
    //draws lines on x and y for drawn point
    stroke(colR, colG, colB)
    point(x+Gwidth/2+locationX,height/2+locationY)
    point(width/2+locationX,-y+Gheight/2+locationY)
    strokeWeight(LI)
    stroke(0)
  }
  function pointMove(){
    if(x<width/2){
      if(runNumber>30){
      x+=width/(runNumber*density*(height/50))
      }else{
        x+=width/(runNumber*density*(height/500))
      }
    }else{
      x=-width/2
      colorControl()
    }
  }
  function colorControl() {
    runNumber++
    print(runNumber)
    if (action < 256) {
      colR -= 32
      colB += 32
      action += 32
    } else if (action < 512) {
      colB -= 32
      colG += 32
      action += 32
    } else if (action < 768) {
      colG -= 32
      colR += 32
      action += 32
    } else {
      action = 0
    }
    density += 10
  }
  function pointDrawMulty(id){
    let TT =true
    for(let i  = 0; i!=2;i++){
      y = calculate[id](TT)
      pointDraw(0,false)
      TT=false
    }
  }
  
  for(let i = 0; i<operations.length; i++){
    if(operations [i] == true){
      pointDrawMulty(i)
    }else{
      pointDraw(i,true)
    }
    pointMove()
  }
}