var Unit = {
	createUnit: function(gid, color,x,y){
		var unit = new createjs.Shape();
		unit.graphics.beginFill(color).drawCircle(0, 0, 50);
		unit.x = x;
		unit.y = y;
		unit.gamepadID = gid;
		//Game.stage.addChild(unit);
		return unit;

	},
	move: function(){

	},
	shoot: function(){

	},
	checkGameInput: function(){
		Controller.checkGameInput(this.gamepadID);
	}
}