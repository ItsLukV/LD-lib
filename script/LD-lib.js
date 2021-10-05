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
function CanvasLD(w, h) {
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
    opgaver++;
    opgave(opgaver);
    h1.html("Opgave " + opgaver);
  }

  function before() {
    //go to task before
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
