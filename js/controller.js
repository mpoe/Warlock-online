/**
 * Created by Mpoe on 01-06-2017.
 */
var Controller = {
    hasGP: false,
    players: 0,
    playerColors: ["red","blue"],
    checkInput: function(){
        //Der kan være op til 4 gamepads på en gang
        //console.log(navigator.getGamepads())
        if(navigator.getGamepads()[0] == null){
            console.log("No controller")
        }else{
            if(navigator.getGamepads()[Game.units.length]){
                var gp = navigator.getGamepads()[Game.units.length];

                for(var i = 0; i<gp.buttons.length; i++){
                    if(gp.buttons[i].pressed){
                        Game.units.push(Unit.createUnit(gp.id,Controller.playerColors[Game.units.length],100,100))
                        console.log(navigator.getGamepads()[0]);
                    }

                    // gp har 4 aksler
                    // 0,1 x,y
                    // 2,3 x,y
                }
            }
        }
    },
    checkGameInput: function(gamepadID){
        //Der kan være op til 4 gamepads på en gang
        // console.log(navigator.getGamepads())


        for( var p = 0; p < Game.units.length;p++){

            var gp = navigator.getGamepads()[p];
            for(var i = 0; i<gp.buttons.length; i++){
                //console.log(gp.buttons[15]);

                if(gp.buttons[i].pressed /* && gp.id == gamepadID */ ){
                    console.log(i);
                    if(i == 0){
                        console.log("mama mia")
                    }
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
                Unit.move(gp.id,x,y);
            }

            if(gp.axes[2]>0.25 || gp.axes[3]>0.25 || gp.axes[2]<-0.25 || gp.axes[3]<-0.25){
                var x = 0;
                var y = 0;
                if(gp.axes[2]>0.25 || gp.axes[2] <-0.25){
                    x = gp.axes[2]*10;
                }
                if(gp.axes[3]>0.25 || gp.axes[3] <-0.25){
                    y = gp.axes[3]*10;
                }
                Unit.moveReticle(gp.id,x,y);
            }
            // gp har 4 aksler
            // 0,1 x,y - left thumbstick
            // 2,3 x,y - right thumbstick

            //}

        }

    }
}
