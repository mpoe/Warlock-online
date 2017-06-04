/**
 * Created by Mpoe on 03-06-2017.
 */
var Scenes ={
    iCounter:0,
    startMenu: function(){
        var btn = new createjs.Bitmap(Preloader.queue.getResult("img/buttons/2-players.jpg"));
        btn.x = 573;
        btn.y = 270;
        btn.addEventListener("click",this.playerMenu(2));
        Game.stage.addChild(btn);

        var btn = new createjs.Bitmap(Preloader.queue.getResult("img/buttons/3-players.jpg"));
        btn.x = 700;
        btn.y = 270;
        btn.addEventListener("click",this.playerMenu(3));
        Game.stage.addChild(btn);

        var btn = new createjs.Bitmap(Preloader.queue.getResult("img/buttons/4-players.jpg"));
        btn.x = 573;
        btn.y = 270;
        btn.addEventListener("click",this.playerMenu(2));
        Game.stage.addChild(btn);

        var btn = new createjs.Bitmap(Preloader.queue.getResult("img/buttons/how-to-play.jpg"));
        btn.x = 573;
        btn.y = 270;
        btn.addEventListener("click",function(){
            alert("Not yet!");
        });
        Game.stage.addChild(btn);
    },
    playerMenu: function(iPlayers){
        //I FOR INTEGER/Playermenu number
    }
}