var Ticker ={
    start:function(){
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on("tick", function(e){
            Game.stage.update(e);
            Unit.checkInput();
            Controller.checkGameInput();
        });
    }
}