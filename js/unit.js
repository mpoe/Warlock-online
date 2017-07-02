var Unit = {
	createUnit: function(gid, color,x,y){
		var unit = new createjs.Shape();
		unit.graphics.beginFill(color).drawCircle(0, 0, 50);
		//The centerpoint of the circle is the x and y values
		unit.x = x;
		unit.y = y;
		unit.gamepadID = gid;
		unit.color = color;

		Game.stage.addChild(unit);

		var reticle = new createjs.Bitmap(Preloader.queue.getResult("img/reticle.png"))
		reticle.x=x;
		reticle.y=y;
		unit.reticle = reticle;

		reticle.scaleY=0.1;
		reticle.scaleX=0.1;

		Game.stage.addChild(reticle);

		unit.controller = gid;
		Game.stage.update();



		return unit;
	},
	move: function(unitid,x,y){
		for( var i = 0; i<Game.units.length;i++){
			if(unitid == Game.units[i].gamepadID){
				Game.units[i].x+=x;
				Game.units[i].y+=y;
			}
		}

	},
	moveReticle: function(unitid,x,y){
		for( var i = 0; i<Game.units.length;i++){
			if(unitid == Game.units[i].gamepadID){
				Game.units[i].reticle.x+=x;
				Game.units[i].reticle.y+=y;
			}
		}
	},
	shoot: function(){

	},
	checkGameInput: function(){
		Controller.checkGameInput(this.gamepadID);
	}
}