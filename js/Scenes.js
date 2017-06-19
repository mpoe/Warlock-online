/**
 * Created by Mpoe on 03-06-2017.
 */
var Scenes ={
    //iCounter:0
    /*startMenu: function(){
        var btn = new createjs.Bitmap(Preloader.queue.getResult("img/buttons/2-players.jpg"));
        btn.x = 250;
        btn.y = 350;
        btn.addEventListener("click", function(){
            Scenes.playerMenu(2);
        });
        Game.stage.addChild(btn);

        var btn = new createjs.Bitmap(Preloader.queue.getResult("img/buttons/3-players.jpg"));
        btn.x = 1080;
        btn.y = 350;
        btn.addEventListener("click", function(){
            Scenes.playerMenu(3);
        });
        Game.stage.addChild(btn);

        var btn = new createjs.Bitmap(Preloader.queue.getResult("img/buttons/4-players.jpg"));
        btn.x = 250;
        btn.y = 680;
        btn.addEventListener("click", function(){
            Scenes.playerMenu(4);
        });
        Game.stage.addChild(btn);

        var btn = new createjs.Bitmap(Preloader.queue.getResult("img/buttons/how-to-play.jpg"));
        btn.x = 1080;
        btn.y = 680;
        btn.addEventListener("click",function(){
            alert("Not yet!");
        });
        Game.stage.addChild(btn);
    },*/
    /*playerMenu: function(iPlayers){
        Game.stage.clear();
        Game.stage.addChild(Game.background);

        Game.players = iPlayers;
        this.iCounter++;

        if(this.iCounter>Game.players){
            Game.startGame();
        }else{
            var text = new createjs.Text("Player " + this.iCounter + " Please press a button", "20px Arial", "#ffffff")

            text.addEventListener("",function(){
                Scenes.playerMenu(Game.players);
            })
            Game.stage.addChild(text);
            Game.stage.update();
        }
    }*/
}