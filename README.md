# LD-lib

LD-lib is made by @dendersen and @ItsLukV

CDN link: https://cdn.jsdelivr.net/gh/ItsLukV/LD-lib@v1.0/LD-lib.js

---

## Function List

1. [wait](https://github.com/ItsLukV/LD-lib/tree/test#wait)
2. [TestLD](https://github.com/ItsLukV/LD-lib/tree/test#testld)
3. [pageCanvasLD](https://github.com/ItsLukV/LD-lib/tree/test#testld)

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
TestLD();

//returns "working"
```

---

### pageCanvasLD

`pageCanvasLD(w, h)` is function made for [P5.js](https://p5js.org/).
It makes a canvas, a HTML \<h1> tag and two HTML buttons.<br>

The Buttons changes between diffent tasks, while updating the \<h1> tag, which show the current task number.<br>

To use the function you need to put in `setup()`, then you need to put in 2 arguments. The first one is the width of the canvas and the second one is the height.<br>

To add a task you need use `opgave[number]()`, the number of the task which goes from 0 to inf.
```js
function setup() {
  pageCanvasLD(1000, 400);
}
```

This makes a canvas with a width of 1000 and a height of 400
![](https://i.imgur.com/Pbphirc.png)
