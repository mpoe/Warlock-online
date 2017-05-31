var Game = {
    stage: new createjs.Stage("warlock"),

    init: function(){
        Preloader.load()
    },

    setup:function(){
        Game.stage.removeAllChildren();
        Ticker.start();
        Game.levelData = Preloader.queue.getResult('levelJson');

        //Load sprite data
        Game.bgtiles = new createjs.SpriteSheet(Preloader.queue.getResult('bgtiles'));
        Game.heroTopDownSheet = new createjs.SpriteSheet(Preloader.queue.getResult('herosheet'))
        Game.heroTopDownSheet.framerate = 5;
        //Game.startGame();
        Game.createCircle();
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

window.addEventListener("gamepadconnected", function(e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
});

var arrayGP = navigator.getGamepads();

console.log(arrayGP);
