# LD-lib

LD-lib is made by @dendersen and @ItsLukV

CDN link: https://cdn.jsdelivr.net/gh/ItsLukV/LD-lib@v1.0/LD-lib.js

---

## Function List

1. [Javascript functions](https://github.com/ItsLukV/LD-lib/tree/main#Javascript-functions)
   1. [wait](https://github.com/ItsLukV/LD-lib/tree/main#wait)
   2. [TestLD](https://github.com/ItsLukV/LD-lib/tree/main#testld)
2. [P5.js addons](https://github.com/ItsLukV/LD-lib/tree/main#P5.js-addons)
   1. [pageCanvasLD](https://github.com/ItsLukV/LD-lib/tree/main#canvasld)
   2. [randomColor](https://github.com/ItsLukV/LD-lib/tree/main#randomcolor)
   3. [grafferLD](https://github.com/ItsLukV/LD-lib/tree/main#randomcolor)
   4. [buttonLD](https://github.com/ItsLukV/LD-lib/tree/main#buttonLD)

---

## Javascript functions

These function works as just vanilla Javascript functions

---

### wait

`wait()` is a funktion, that make a delay indside of the parent function.<br><br>
You can specify the amount of delay, by inserting the length of the delay in arg.

```js
function myFunction() {
  console.log("hello");
  wait(100);
  console.log("100ms later hello");
}

myFunction();
```

The delay needs to be in milliseconds.

---

### TestLD

`TestLD()` is a function to test, if LD-lib works then it will return "working" in the console

```js
function setup() {
  TestLD();
}

//returns "working"
```

---

## P5.js addons

These function are made for library called [P5.js](https://p5js.org/), so they will not will vanilla Javascript.

---

### pageCanvasLD

`pageCanvasLD(w, h)` is function made for [P5.js](https://p5js.org/). **This function works properly only if P5.js is loaded in.**
<br>
It makes a canvas, a HTML \<h1> tag and two HTML buttons.<br>

The Buttons changes between diffent tasks, while updating the \<h1> tag, which will show the current task number.<br>

To use the function you need to put in `setup()`, then you need to put in 2 arguments. The first one is the width of the canvas and the second one is the height.<br>

```js
function setup() {
  pageCanvasLD(1000, 400);
}
```

This makes a canvas with a width of 1000 and a height of 400
![](https://i.imgur.com/Pbphirc.png)

To add a task you need use `opgave[number]()`, the number of the task which goes from 0 to infinity.

```js
function setup() {
  pageCanvasLD(1000, 400);
}

function opgave1() {
  ellipse(200, 200, 50);
}
```

---

### randomColor

`randomColor()` is a function made for [P5.js](https://p5js.org/). **This function works properly only if P5.js is loaded in.**
<br>
This function returns a random rgb string, which can be used inside of a fill function

```js
function draw() {
  fill(randomColor());
  ellipse(200, 200, 50);
}
```

---

### grafferLD

`grafferLD()` is a function made for [P5.js](https://p5js.org/). **This function works properly only if P5.js is loaded in.**
<br>
This function creates and runs a graffing calculator on a canvas. To do this use .start() and .setup<br>
to restart the graff use .reset()

```js
function setup(){
  variable = new grafferLD()
  variable.start(Width, Height, LocationX, LocationY, Calculations[], Operations[], Density)
}

function draw() {
  variable.step()
}

```

---

### ButtonLD

`buttonLD` is a function made for [P5.js](https://p5js.org/). **This function works properly only if P5.js is loaded in.**
<br>
This function creates and runs a button on a canvas. To do this create the buttonLD object with the button context as the arg.<br>

1. To set/change the postion of the button use `.setPosition(x, y)`<br>
2. To set/change the size of the button use `.setSize(w, h)`<br>
3. To set/change what to do on the button that is pressed use `onPress(functionName)` (This can be the name of funktion or arrow funktion)<br>
4. To set/change the text of the button use `.setText(text)`<br>
5. To set/change the background color of the button use `.setColor(red, green, blue)`<br>
6. To set/change the background color of the button when mouse hover over it use `.setColorHover(red, green, blue)`<br>
7. To set/change the color of the text use `.setTextColor(red, green, blue)`<br>
8. To set/change the size of the text use `.setTextSize(size)`<br>
9. To set/change the color of the border use `.setBorderColor(red, green, blue)`<br>

```js
let variable;
function setup() {
  variable = new buttonLD(button);
  variable.setPosition(x, y);
  variable.setSize(w, h);
  variable.setText(text);
  variable.setColor(red, green, blue);
  variable.setColorHover(red, green, blue);
  variable.setTextColor(red, green, blue);
  variable.setBorderColor(red, green, blue);
}

function draw() {
  variable.draw();
}
```

## Know bugs

1. Non known bugs
