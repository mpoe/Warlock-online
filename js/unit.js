var Unit = {
	unitRadius: 50,
	basespeed: 5,
	createUnit: function(gid, color,x,y){
		var unit = new createjs.Shape();
		unit.graphics.beginFill(color).drawCircle(0, 0, Unit.unitRadius);
		//The centerpoint of the circle is the x and y values
		unit.x = x;
		unit.y = y;
		unit.gamepadID = gid;
		unit.color = color;
		unit.direction =0;
		unit.speed = Unit.basespeed;

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
				var unit = Game.units[i];
				unit.x+= x * unit.speed;
				unit.y+= y * unit.speed;
				Unit.reticleFollow(i,x*unit.speed,y*unit.speed);
			}
		}

	},
	moveReticle: function(unitid,x,y){
		for( var i = 0; i<Game.units.length;i++){
			if(unitid == Game.units[i].gamepadID){
				var unit = Game.units[i]
				//var distance = Util.getDistance(unit.x,unit.y,unit.reticle.x,unit.reticle.y);
				var radians = Util.getRadians(0,0,x,y);

				var aCoords = Util.getPointOnCircle(unit.x,unit.y,Unit.unitRadius*2,radians)

				unit.reticle.x=aCoords[0];
				unit.reticle.y=aCoords[1];

				unit.direction = radians;
			}
		}
	},
	reticleFollow: function(index,x,y){
		var unit = Game.units[index]
		unit.reticle.x+=x;
		unit.reticle.y+=y;
	},
	shoot: function(unitid,radians){
		for( var i = 0; i<Game.units.length;i++) {
			if (unitid == Game.units[i].gamepadID) {
				var unit = Game.units[i]
				var projectile = new createjs.Shape();
				projectile.graphics.beginFill("red").drawCircle(0, 0, 10);
				projectile.x = unit.x;
				projectile.y = unit.y;
				projectile.range = 1000;
				projectile.traveled = 0;
				projectile.directionX = Math.cos(radians);
				projectile.directionY = Math.sin(radians);

				projectile.owner = unit.gamepadID;
				Game.projectiles.push(projectile);
				Game.stage.addChild(projectile);
			}
		}
	},
	checkGameInput: function(){
		Controller.checkGameInput(this.gamepadID);
	}
}