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

const graffSaverArray_No_Touch__For_Real__ = []

function grafferLD (Gwidth, Gheight, locationX, locationY, calculations, operations,density, reset){
  let y, x, runNumber, colR, colG, colB, action
  let LI = Gwidth/100
  if (reset) for (let i = 0; i<graffSaverArray_No_Touch__For_Real__.length; i++){
  graffSaverArray_No_Touch__For_Real__ [i] = undefined
  graffSaverArray_No_Touch__For_Real__ [-10] = false
  }else if (graffSaverArray_No_Touch__For_Real__[-10]){
    let j = 0
    y = graffSaverArray_No_Touch__For_Real__ [j]
    j++
    x = graffSaverArray_No_Touch__For_Real__ [j]
    j++
    runNumber = graffSaverArray_No_Touch__For_Real__ [j]
    j++
    colR = graffSaverArray_No_Touch__For_Real__ [j]
    j++
    colG = graffSaverArray_No_Touch__For_Real__ [j]
    j++
    colB = graffSaverArray_No_Touch__For_Real__ [j]
    j++
    action = graffSaverArray_No_Touch__For_Real__ [j]
    j++
  }else{
    y = 0
    x = -Gwidth/2
    runNumber = 0
    colR = 255
    colG = 0
    colB = 0
    action = 0
    graffSaverArray_No_Touch__For_Real__ [-10] = true

    strokeWeight(0)
    fill(80)
    rect(locationX, locationY, Gwidth, Gheight)

    stroke(255)
    strokeWeight(LI)
    line(Gwidth/2+locationX, Gheight-(Gheight/30)+locationY, Gwidth/2+locationX, (Gheight/30)+locationY)
    line(Gwidth-(Gwidth/40)+locationX, Gheight/2+locationY, (Gwidth/40)+locationX, Gheight/2+locationY)
  }

  function pointDraw(id,CC){ //makes a point showing where is currently being drawn
    if(x>Gwidth/2-Gwidth/400) return
    if(x<-Gwidth/2+Gwidth/400)return
    
    if(CC) y = calculations [id](x)
    
    if(y>Gheight/2-Gheight/400) return
    if(y<-Gheight/2+Gheight/400) return
    
    strokeWeight(LI/3)
    point(x+Gwidth/2+locationX,-y+Gheight/2+locationY)
    
    //draws lines on x and y for drawn point
    stroke(colR, colG, colB)
    point(x+Gwidth/2+locationX,Gheight/2+locationY)
    point(Gwidth/2+locationX,-y+Gheight/2+locationY)
    strokeWeight(LI)
    stroke(0)
  }
  function pointMove(){
    if(x<Gwidth/2){
      if(runNumber>15){
      x+=Gwidth/(runNumber*density*(Gheight/50))
      }else{
        x+=Gwidth/(runNumber*density*(Gheight/500))
      }
    }else{
      x=-Gwidth/2
      colorControl()
    }
  }
  function colorControl() {
    runNumber++
    console.log(runNumber)
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
      y = calculations[id](TT,x)
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
  {
    let jJJ = 0
    graffSaverArray_No_Touch__For_Real__ [jJJ] = y
    jJJ++
    graffSaverArray_No_Touch__For_Real__ [jJJ] = x
    jJJ++
    graffSaverArray_No_Touch__For_Real__ [jJJ] = runNumber
    jJJ++
    graffSaverArray_No_Touch__For_Real__ [jJJ] = colR
    jJJ++
    graffSaverArray_No_Touch__For_Real__ [jJJ] = colG
    jJJ++
    graffSaverArray_No_Touch__For_Real__ [jJJ] = colB
    jJJ++
    graffSaverArray_No_Touch__For_Real__ [jJJ] = action
  jJJ++
  }
}