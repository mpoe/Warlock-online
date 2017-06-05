var Unit = {
	constructor: function(gid, color){
		this.gamepadID =gid;
		this.color = color;
	},
	gamepadID: null,
	color: null,
	move: function(){

	},
	shoot: function(){

	},
	checkGameInput: function(){
		Controller.checkGameInput(this.gamepadID);
	},
	checkInput: function(){
		Controller.checkInput();
	}
}