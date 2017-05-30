var game = {
    stage: new createjs.Stage("warlock"),

    createCircle: function(){
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        game.stage.addChild(circle);

        game.stage.update();
    }
}

window.addEventListener("gamepadconnected", function(e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
});

var arrayGP = navigator.getGamepads();

console.log(arrayGP);

game.createCircle();