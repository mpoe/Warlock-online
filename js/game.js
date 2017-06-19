var Game = {
    stage: new createjs.Stage("warlock"),
    units: [],
    colors:["blue","red"],
    players: 0,
    currentRound:0, //increments on game start
    maxRounds:10, // maybe allow user to choose
    background:"",
    gameStarted: false,
    init: function(){
        Preloader.load()
    },

    setup:function(){
        Game.background = new createjs.Bitmap(Preloader.queue.getResult("img/backgrounds/bg1.jpg"));
        Game.stage.removeAllChildren();
        //Scenes.startMenu();
        Game.stage.addChild(Game.background);
        Game.stage.update();

        Ticker.start();
    },
    startGame: function(){
        // TBD
    },
    createCircle: function(color, controller, length) {
        var circle = new createjs.Shape();
        circle.graphics.beginFill(color).drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        Game.stage.addChild(circle);
        circle.controller = controller;
        Game.units[length-1].unit = circle;
        Game.stage.update();
    }
}
