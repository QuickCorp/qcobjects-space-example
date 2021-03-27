'use strict';
Package('com.mycompany.mypackage.customelements',[
    Class ("MySpace2d", HTMLCanvasElement, {
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
      body: document.createElement("canvas"),

      /**
        * fillBackground is a method that fills the background of the page with the canvas content
        */
      fillbackground () {
          this.body.setAttribute("style", "height: 100vh; width: 100vw; display: block; background-color: black");
      },

      /**
        * the _new_ method sets the initial settings for the canvas background and stroke
        */
      _new_ (){
          this.fillbackground();
          this.ctx = this.body.getContext("2d");
          this.ctx.fillStyle = "#ffffff";
          this.ctx.strokeStyle = "#ffffff";
          this.ctx.lineWith = 0.01;
      },

      /**
        * dot is a method to draw a dot into the canvas element
        */
      dot (x, y, width) {
          var ctx = this.ctx;
          ctx.beginPath();
          ctx.arc(x, y, width, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
      },

      /**
        * getRandPos is a method to get a random position for a dot
        */
      getRandPos (min, max){
          return Math.floor( Math.random () * (max - min + 1 ) + min);
      },

      /**
        * randDot draws a dot in a random position into the canvas element
        */
      randDot (x, y){
          var randY = this.getRandPos(y / 500, 1200);
          var randX = this.getRandPos(x / 500, 1200);
          var randWidth = this.getRandPos(0.001, 1.41);
          this.dot(randX, randY, randWidth);
      },

      /**
        * clear is a method to clear the dots
        */
      clear (){
          var ctx = this.ctx;
          ctx.beginPath();
          ctx.clearRect(0, 0, ctx.canvas.offsetWidth + 100, ctx.canvas.offsetHeight + 100);
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
      },

      /**
        * draw is a method to do the dots drawing loop
        */
      draw (){
          var instance = this;
          instance.clear();
          range (0, 500).map ((i) => {
              instance.randDot(i, i);
          })
      }

    })
]);
