var Ticker ={
    fps: 30,
    start:function(){
        createjs.Ticker.setFPS(Ticker.fps);
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