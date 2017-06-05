var Game = {
    stage: new createjs.Stage("warlock"),
    units: [],
    colors:["blue","red"],
    players: 0,
    currentRound:0, //increments on game start
    maxRounds:10, // maybe allow user to choose
    background:"",
    init: function(){
        Preloader.load()

    },

    setup:function(){
        Game.background = new createjs.Bitmap(Preloader.queue.getResult("img/backgrounds/bg1.jpg"));
        Game.stage.removeAllChildren();
        //Scenes.startMenu();
        Game.stage.addChild(Game.background);
        Scenes.startMenu();
        Game.stage.update();
        Ticker.start();
        //Game.levelData = Preloader.queue.getResult('levelJson');
        //
        ////Load sprite data
        //Game.bgtiles = new createjs.SpriteSheet(Preloader.queue.getResult('bgtiles'));
        //Game.heroTopDownSheet = new createjs.SpriteSheet(Preloader.queue.getResult('herosheet'))
        //Game.heroTopDownSheet.framerate = 5;
        ////Game.startGame();
        //console.log("x setup");
        //Game.createCircle();
    },
    startGame: function(){
        Ticker.start();
        alert("Game started");
    },
    createCircle: function(){
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        Game.stage.addChild(circle);

        Game.stage.update();
    }
}
