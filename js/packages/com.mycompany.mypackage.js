'use strict';
Import ("com.mycompany.mypackage.customelements");
Package('com.mycompany.mypackage',[
    Class('SpaceComponent',Component,{
        name:'space',
        _new_ (o){
            var spaceContext = New (MySpace2d, {});
            setInterval (function (){
                spaceContext.draw();
            }, 90);
            this.body.append (spaceContext);
        }
    })
    
]);
