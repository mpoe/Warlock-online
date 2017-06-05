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
                        if(Game.units.length==1){
                            Game.startGame();
                        }
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
            //for(var j = 0; j<Game.units.length;j++){
            var gp = navigator.getGamepads()[0];
            for(var i = 0; i<gp.buttons.length; i++){
                //console.log(gp.buttons[15]);

                if(gp.buttons[i].pressed && gp.id == gamepadID){

                    if(i == 0){
                        console.log("mama mia")
                    }
                }
                // gp har 4 aksler
                // 0,1 x,y
                // 2,3 x,y
            }
            //}

        }

    }
}
