/**
 * Created by Mpoe on 01-06-2017.
 */
var Controller = {
    hasGP: false,
    players: 0,
    checkInput: function(){
        //Der kan være op til 4 gamepads på en gang
        // console.log(navigator.getGamepads())
        if(navigator.getGamepads()[0] == null){
            console.log("No controller")
        }else{
            if(navigator.getGamepads()[Game.units.length]){
                var gp = navigator.getGamepads()[Game.units.length];

                for(var i = 0; i<gp.buttons.length; i++){

                    if(gp.buttons[i].pressed){
                        Game.units.push(Unit.createUnit(gp.id,"blue",100,100))
                        Game.createCircle("blue", gp.id, Game.units.length);
                    }

                    // gp har 4 aksler
                    // 0,1 x,y
                    // 2,3 x,y
                }
            }

            //}

        }
    },
    checkGameInput: function(gamepadID){
        //Der kan være op til 4 gamepads på en gang
        // console.log(navigator.getGamepads())
        if(navigator.getGamepads()[0] == null){
            console.log("No controller")
        }else{
            var gp = navigator.getGamepads()[0];
            for(var i = 0; i<gp.buttons.length; i++){
                //console.log(gp.buttons[15]);

                if(gp.buttons[i].pressed && gp.id == gamepadID){

                    if(i == 0){
                        console.log("mama mia")
                    }
                }

                if(gp.axes[0]>0.25 || gp.axes[1]>0.25 || gp.axes[0]<-0.25 || gp.axes[1]<-0.25){
                    var x =0;
                    var y = 0;
                    if(gp.axes[0]>0.25 || gp.axes[0] <-0.25){
                        x = gp.axes[0];
                    }
                    if(gp.axes[1]>0.25 || gp.axes[1] <-0.25){
                        y = gp.axes[1];
                    }
                    //console.log("x:"+ x + " y:" + y);
                    Unit.move(gp.id,x,y);
                }
                // gp har 4 aksler
                // 0,1 x,y
                // 2,3 x,y
            }
            //}

        }

    }
}
