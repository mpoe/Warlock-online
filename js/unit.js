var Unit = {
	unitRadius: 50,
	createUnit: function(gid, color,x,y){
		var unit = new createjs.Shape();
		unit.graphics.beginFill(color).drawCircle(0, 0, Unit.unitRadius);
		//The centerpoint of the circle is the x and y values
		unit.x = x;
		unit.y = y;
		unit.gamepadID = gid;
		unit.color = color;

		Game.stage.addChild(unit);

		//var reticle = new createjs.Bitmap(Preloader.queue.getResult("img/reticle.png"))
		var reticle = new createjs.Shape();

		reticle.graphics.setStrokeStyle(4);
		reticle.graphics.beginStroke("Green").drawCircle(0,0,5);

		//var g = new createjs.Graphics();g.setStrokeStyle(1);g.beginStroke("#000000");g.drawCircle(0,0,30);
		reticle.x=x;
		reticle.y=y;
		unit.reticle = reticle;

		//reticle.scaleY=0.1;
		//reticle.scaleX=0.1;

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
				Unit.reticleFollow(Game.units[i].gamepadID,x,y);
			}
		}

	},
	moveReticle: function(unitid,x,y){
		for( var i = 0; i<Game.units.length;i++){
			if(unitid == Game.units[i].gamepadID){
				var unit = Game.units[i]
				var distance = Util.getDistance(unit.x,unit.y,unit.reticle.x,unit.reticle.y);
				if(distance > 150 || distance <-150){
					console.log("too far away");
				}else{
					//unit.reticle.x+=x;
					//unit.reticle.y+=y;

					var radians = Util.getRadians(0,0,x,y);

					//console.log(Util.getPointOnCircle(unit.x,unit.y,Unit.unitRadius,unit.reticle.x,unit.reticle.y));
					var aCoords = Util.getPointOnCircle(unit.x,unit.y,Unit.unitRadius*2,radians)

					unit.reticle.x=aCoords[0];
					unit.reticle.y=aCoords[1];




				}



			}
		}
	},
	reticleFollow: function(unitid,x,y){
		for( var i = 0; i<Game.units.length;i++){
			if(unitid == Game.units[i].gamepadID){
				var unit = Game.units[i]
				unit.reticle.x+=x;
				unit.reticle.y+=y;
			}
		}
	},
	shoot: function(){

	},
	checkGameInput: function(){
		Controller.checkGameInput(this.gamepadID);
	}
}