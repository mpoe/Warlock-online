var Game = {
    stage: new createjs.Stage("warlock"),
    dimensions: {
        width: $('#warlock').width(),//1920
        height: $('#warlock').height()//1080
    },
    stageSize: {
        leftX: 0,
        rightX: 0,
        topY:0,
        botY: 0
    },
    zoom: 1.0, // Treated as scale
    units: [],
    colors:["blue","red"],
    players: 0,
    currentRound:0, //increments on game start
    maxRounds:10, // maybe allow user to choose
    background:"",
    gameStarted: false,
    projectiles: [],
    init: function(){
        Preloader.load()
    },

    setup:function(){
        Game.background = new createjs.Bitmap(Preloader.queue.getResult("img/backgrounds/bg1.jpg"));
        Game.stage.removeAllChildren();
        //Scenes.startMenu();
        Game.stage.addChild(Game.background);
        Game.stage.update();
        Game.setStageSize(0,Game.dimensions.width,0,Game.dimensions.height)

        Ticker.start();
    },
    startGame: function(){
        Game.gameStarted = true;
    },
    setStageSize: function(minX,maxX,minY,maxY){
        Game.stageSize =  {
            leftX: minX,
            rightX: maxX,
            topY:minY,
            botY: maxY
        }
    }
}
