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
	move: function(unitid,x,y){
		for( var i = 0; i<Game.units.length;i++){
			if(unitid == Game.units[i].gamepadID){
				Game.units[i].unit.x+=x;
				Game.units[i].unit.y+=y;
			}
		}

	},
	shoot: function(){

	},
	checkGameInput: function(){
		Controller.checkGameInput(this.gamepadID);
	}
}