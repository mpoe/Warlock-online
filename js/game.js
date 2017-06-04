var Game = {
    stage: new createjs.Stage("warlock"),
    unitColors: [
        {blue:"blue",active:0},
        {red:"red",active:0}
    ],
    units: [],

    init: function(){
        Preloader.load()

    },

    setup:function(){
        Game.stage.removeAllChildren();
        Game.createCircle();
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

    createCircle: function(){
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        Game.stage.addChild(circle);

        Game.stage.update();
    },
    checkInput: function(){
        Controller.checkInput();
    }
}
