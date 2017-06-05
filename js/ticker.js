var Ticker ={
    start:function(){
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on("tick", function(e){
            Game.stage.update(e);
            navigator.getGamepads();
            console.log("ticker ticked");
            if(Game.gameStarted){
                Controller.checkGameInput(Game.units[0].gamepadID);
            }else{
                Controller.checkInput();
            }
        });
    },
    stop:function(){
        createjs.Ticker.removeAllEventListeners();
    }
}