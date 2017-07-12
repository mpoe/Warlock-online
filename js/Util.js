/**
 * Created by Mpoe on 31-05-2017.
 */
var Util = {
    getRandomInt:function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getAngle: function(centerX,centerY,x,y){
        //https://gamedev.stackexchange.com/questions/33709/get-angle-in-radians-given-a-point-on-a-circle
        // Get a value between -pi to pi
        // When converting, add 180 so the value is between 0,360 instead of -180,180
        return Util.degrees(Math.atan2(y - centerY, x - centerX))+180;
    },
    getRadians:function(centerX,centerY,x,y){
        return Math.atan2(y - centerY, x - centerX)
    },
    degrees: function(radians) {
        //http://cwestblog.com/2012/11/12/javascript-degree-and-radian-conversion/
        return radians * 180 / Math.PI;
    },
    getDistance: function(centerX,centerY,x,y){
        var a = centerX - x;
        var b = centerY - y;
        return Math.sqrt( a*a + b*b );
    },
    getPointOnCircle:function(centerX,centerY,radius,radians){
        var x = centerX + radius * Math.cos(radians);
        var y = centerY + radius * Math.sin(radians);
        return [x,y];
    },
    setScale:function(iScale){
        Game.stage.scaleX = iScale;
        Game.stage.scaleY = iScale;
    }
}