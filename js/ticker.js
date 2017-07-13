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


                    //Zoom out logic
                    if(
                        Game.zoom >= 1 &&
                            (
                            Game.stageSize.rightX - unit.x <= 80 // zoom in rightside
                                ||
                            unit.x - Game.stageSize.leftX  <= 80 // zoom in leftside
                                 ||
                            Game.stageSize.botY - unit.y <= 45 //zoom in bottomside
                                ||
                            unit.y - Game.stageSize.topY <= 45 //zoom in topside
                            )
                    ){
                        if(Game.zoom>1){
                            Game.zoom-=0.05; // Zoom out
                            Util.setScale(Game.zoom);
                        }
                    }

                    //Zoom in logic

                    if(
                        Game.zoom <=2 &&
                            (
                            Game.stageSize.rightX - unit.x >= (Game.stageSize.rightX - Game.stageSize.leftX) *0.3
                                ||
                            unit.x - Game.stageSize.leftX >= (Game.stageSize.rightX - Game.stageSize.leftX) *0.3
                                ||
                            Game.stageSize.topY - unit.y >= Game.stage.topY*0.7
                                ||
                            unit.y - Game.stageSize.botY >= Game.stage.botY + 80*2.3
                            )
                    ){
                        console.log("Here")
                        Game.zoom+=0.05; // Zoom in
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