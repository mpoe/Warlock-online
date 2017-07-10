var Ticker ={
    fps: 30,
    start:function(){
        createjs.Ticker.setFPS(Ticker.fps);
        createjs.Ticker.on("tick", function(e){
            Game.stage.update(e);
            navigator.getGamepads();
            if(Game.gameStarted){
                Controller.checkGameInput();



                for(var i = 0; i<Game.projectiles.length;i++){
                    var projectile = Game.projectiles[i];
                    projectile.x += projectile.directionX*5;
                    projectile.y += projectile.directionY*5;
                    projectile.traveled += (projectile.directionY + projectile.directionX)*5;
                    if(projectile.traveled > projectile.range){
                        Game.stage.removeChild(projectile);
                        Game.projectiles.splice(i,1);
                    }
                }


            }else{
                Controller.checkInput();
            }
        });
    },
    stop:function(){
        createjs.Ticker.removeAllEventListeners();
    }
}