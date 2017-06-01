/**
 * Created by Mpoe on 31-05-2017.
 */
var Preloader ={
	queue: new createjs.LoadQueue(true),
	loadText: new createjs.Text("", "50px Courier New", "#000"),
	loaderBar:new createjs.Container(),
	bar:new createjs.Shape(),
	loaderWidth:300,
	loaderColor:createjs.Graphics.getRGB(247, 247, 247),
	load:function(){
		var barHeight = 20;
		this.bar.graphics.beginFill(this.loaderColor).drawRect(0, 0, 1, barHeight).endFill();
		var bgBar = new createjs.Shape();
		var padding = 3;
		bgBar.graphics.setStrokeStyle(1).beginStroke(this.loaderColor).drawRect(-padding / 2, -padding / 2, this.loaderWidth + padding, barHeight + padding);
		this.loaderBar.x = Game.stage.canvas.width - this.loaderWidth >> 1;
		this.loaderBar.y = Game.stage.canvas.height - barHeight >> 1;
		this.loaderBar.addChild(this.bar, bgBar);
		Game.stage.addChild(this.loaderBar);

		Game.stage.addChild(this.loadText);

		this.queue.installPlugin(createjs.Sound)

		this.queue.on("progress", this.progress, this);
		this.queue.on("complete", Game.setup(), Game);

		this.queue.loadManifest([
			//JS
			"js/calc.js","js/game.js","js/ticker.js","js/unit.js","js/createjs.js","js/controller.js"
		])
	},
	progress:function(e){
		this.loadText.text=Math.round(e.progress*100)+"% done";
		this.bar.scaleX = e.loaded * this.loaderWidth;
		console.log(e.progress)
		Game.stage.update();
	}
}