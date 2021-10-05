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
    switch (x) {
      case 1:
        try {
          opgave1();
        } catch (err) {
          print("failed");
        }
        break;

      case 2:
        try {
          opgave2();
        } catch (err) {
          print("failed");
        }
        break;

      case 3:
        try {
          opgave3();
        } catch (err) {
          print("failed");
        }
        break;

      case 4:
        try {
          opgave4();
        } catch (err) {
          print("failed");
        }
        break;

      case 5:
        try {
          opgave5();
        } catch (err) {
          print("failed");
        }
        break;

      case 6:
        try {
          opgave6();
        } catch (err) {
          print("failed");
        }
        break;

      case 7:
        try {
          opgave7();
        } catch (err) {
          print("failed");
        }
        break;

      case 8:
        try {
          opgave8();
        } catch (err) {
          print("failed");
        }
        break;

      case 9:
        try {
          opgave9();
        } catch (err) {
          print("failed");
        }
        break;

      case 10:
        try {
          opgave10();
        } catch (err) {
          print("failed");
        }
        break;

      case 11:
        try {
          opgave11();
        } catch (err) {
          print("failed");
        }
        break;

      case 12:
        try {
          opgave12();
        } catch (err) {
          print("failed");
        }
        break;

      case 13:
        try {
          opgave13();
        } catch (err) {
          print("failed");
        }
        break;

      default:
        background(220);
        break;
    }
  }
}
