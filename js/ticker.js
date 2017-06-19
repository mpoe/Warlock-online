var Ticker ={
    start:function(){
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on("tick", function(e){
            Game.stage.update(e);
            navigator.getGamepads();
            if(Game.gameStarted){
                Controller.checkGameInput();
            }else{
                Controller.checkInput();
            }
        });
    },
    stop:function(){
        createjs.Ticker.removeAllEventListeners();
    }
}