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

                for(var i = 0; i<Game.units.length;i++){
                    var unit = Game.units[i];
                    if(
                        Game.zoom < 1 &&
                            (
                            Game.dimensions.width * Game.zoom - unit.x <= 80 // zoom in rightside
                                ||
                            unit.x <= 80 // zoom in leftside
                                 ||
                            Game.dimensions.height * Game.zoom - unit.y <= 45 //zoom in bottomside
                                ||
                            unit.y <= 45 //zoom in topside
                            )
                    ){
                        Game.zoom+=0.05;
                        Util.setScale(Game.zoom);
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