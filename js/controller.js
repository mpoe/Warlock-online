/**
 * Created by Mpoe on 01-06-2017.
 */
var Controller = {
    hasGP: false,

    checkInput: function(){
        if(navigator.getGamepads()[0] == null){
            console.log("No controller")
        }else{
            var gp = navigator.getGamepads()[0];
            //console.log(gp);
            for(var i = 0; i<gp.buttons.length; i++){
                if(gp.buttons[i].pressed == 1){
                    if(i == 0){
                        console.log("You pressed a specific button")
                    }
                }
            }
        }

    }
}
