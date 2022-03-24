# LD-lib

LD-lib is made by @dendersen and @ItsLukV

CDN link: https://cdn.jsdelivr.net/gh/ItsLukV/LD-lib@v1.0/LD-lib.js

---

## Function List

1. [Javascript functions](https://github.com/ItsLukV/LD-lib/tree/test#Javascript-functions)
   1. [wait](https://github.com/ItsLukV/LD-lib/tree/test#wait)
   2. [TestLD](https://github.com/ItsLukV/LD-lib/tree/test#testld)
2. [P5.js addons](https://github.com/ItsLukV/LD-lib/tree/test#P5.js-addons)
   1. [pageCanvasLD](https://github.com/ItsLukV/LD-lib/tree/test#canvasld)
   2. [randomColor](https://github.com/ItsLukV/LD-lib/tree/test#randomcolor)
   3. [grafferLD]()

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

## Know bugs

1. Non known bugs
