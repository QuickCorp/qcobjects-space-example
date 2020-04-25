# A Quick example of how to make a Galaxy Background using QCObjects

# Tutorial:

## Writing your main HTML file:

Write the following HTML in your ***index.html***

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
  <!-- This is a wide open CSP declaration. To lock this down for production, see below. -->
  <meta http-equiv="Content-Security-Policy"
    content="default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: gap: https://ssl.gstatic.com; img-src * 'self' data:; child-src *; style-src * 'self' 'unsafe-inline' 'unsafe-eval'; script-src * 'self' 'unsafe-inline' 'unsafe-eval'; connect-src * 'self' 'unsafe-inline' 'unsafe-eval';media-src *" />
  <title>QCObjects Space Example</title>
  <script type="text/javascript" src="https://qcobjects.dev/QCObjects.js"></script>
</head>

<body>
  <component name="space" componentClass="SpaceBackgroundComponent"></component>

  <script type="text/javascript" src="init.js"></script>


</body>

</html>
```

## Extending the traditional Canvas behaviour

```javascript
Class('MySpace2d', HTMLCanvasElement, {
  /**
   * A Canvas Handler Class
   */

  /**
   * ctx is the context of the canvas
   */
  ctx: null,
  /**
   * body is the canvas element itself
   */
  body: document.createElement('canvas'),

  /**
   * fillBackground is a method that fills the background of the page with the canvas content
   */
  fillBackground: function() {
    this.body.setAttribute('style', "height:100vh; width:100vw; display: block;background-color:black;");
  },

  /**
   * clear is a method to clear the dots
   */
  clear: function() {
    var ctx = this.ctx;
    ctx.beginPath();
    ctx.clearRect(0, 0, ctx.canvas.offsetWidth + 100, ctx.canvas.offsetHeight + 100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  },

  /**
   * getRandPos is a method to get a random position for a dot
   */
  getRandPos: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  /**
   * dot is a method to draw a dot into the canvas element
   */
  dot: function(x, y, width) {
    var ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(x, y, width, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  },
  /**
   * randDot draws a dot in a random position into the canvas element
   */
  randDot: function(x, y) {
    var randX = this.getRandPos(x / 500, 1200);
    var randY = this.getRandPos(y / 500, 1200);
    var randWidth = this.getRandPos(0.001, 1.41);
    this.dot(randX, randY, randWidth);
  },
  /**
   * draw is a method to do the dots drawing loop
   */
  draw: function() {
    this.clear();
    for (var i = 0; i <= 500; i++) {
      this.randDot(i, i);
    }
  },
  /**
   * the _new_ method sets the initial settings for the canvas background and stroke
   */
  _new_: function() {
    this.fillBackground();
    this.ctx = this.body.getContext('2d');
    this.ctx.strokeStyle = '#FFFFFF';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.lineWidth = 0.01;
  }
})
```

## Writing your custom Space Background Component

```javascript
Class('SpaceBackgroundComponent', Component, {
  dependencies: [],
  /**
   * This is the custom component class to handle the space component behaviour
   */

  /**
   * name is a descriptive name for the component
   */
  name: 'space',

  /**
   * cached is a boolean to save the component in a cache, it is used only when template-source is default
   */
  cached: false,

  /**
   * The new method is called after the construction of the object
   */
  _new_: function() {
    this.dependencies.push(New(SourceCSS, {
      url: "space-background.css",
      name: "css-background",
      done: () => {}
    }));
    var spaceContext = New(MySpace2d, {});

    // by setting an interval to draw we got a space traveling effect as a result
    setInterval(function() {
      spaceContext.draw();
    }, 90);

    // this will append the canvas element to the component
    this.body.append(spaceContext);
  }
})
```

## Put everything into a QCObjects Package

It is recommended to put every Class definition into a Package
Check out the code in ***init.js*** on this repo to see the complete example.

```javascript
'use strict';
Package('org.quickcorp.special.backgrounds.myspacebackground',[
  Class('MySpace2d',HTMLCanvasElement,{
    //...
  }),
  Class('SpaceBackgroundComponent',Component,{
    //...
  })
]);
```

## Try the demo:

To try the live demo click [here](https://quickcorp.github.io/qcobjects-space-example/)
