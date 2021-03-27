'use strict';
Package('com.mycompany.mypackage.customelements',[
    Class ("MySpace2d", HTMLCanvasElement, {
        ctx: null, 
        body: document.createElement("canvas"),
        fillbackground () {
            this.body.setAttribute("style", "height: 100vh; width: 100vw; display: block; background-color: black");
        },
        _new_ (){
            this.fillbackground();
            this.ctx = this.body.getContext("2d");
            this.ctx.fillStyle = "#ffffff";
            this.ctx.strokeStyle = "#ffffff";
            this.ctx.lineWith = 0.01;
        },
        dot (x, y, width) {
            var ctx = this.ctx;
            ctx.beginPath();
            ctx.arc(x, y, width, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }, 
        getRandPos (min, max){
            return Math.floor( Math.random () * (max - min + 1 ) + min);
        },
        randDot (x, y){
            var randY = this.getRandPos(y / 500, 1200);
            var randX = this.getRandPos(x / 500, 1200);
            var randWidth = this.getRandPos(0.001, 1.41);
            this.dot(randX, randY, randWidth);
        }, 
        clear (){
            var ctx = this.ctx;
            ctx.beginPath();
            ctx.clearRect(0, 0, ctx.canvas.offsetWidth + 100, ctx.canvas.offsetHeight + 100);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        },
        draw (){
            var instance = this;
            instance.clear();
            range (0, 500).map ((i) => {
                instance.randDot(i, i);
            })
        }

    })
]);
