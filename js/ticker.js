var Ticker ={
    start:function(){
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on("tick", function(e){
            Game.checkInput();
            Game.stage.update(e);
        });
    }
}