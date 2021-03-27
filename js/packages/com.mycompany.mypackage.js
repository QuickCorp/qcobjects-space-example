'use strict';
Import ("com.mycompany.mypackage.customelements");
Package('com.mycompany.mypackage',[
    Class('SpaceComponent',Component,{
        name:'space',
        _new_ (o){
            var spaceContext = New (MySpace2d, {});

            // by setting an interval to draw we got a space traveling effect as a result
            setInterval (spaceContext.draw);

             // this will append the canvas element to the component
            this.body.append (spaceContext);
        }
    })

]);
