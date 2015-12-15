// JavaScript Document

var nikod = 10;
var haim = 5;

function init()
{
	document.getElementById("score").innerHTML = nikod;
	document.getElementById("lives").innerHTML = haim;	
	
	initSonic();
}
function addLife(x)
{
	haim += x;
	document.getElementById("lives").innerHTML = haim;	
}

function addScore(x)
{
	nikod += x;
	document.getElementById("score").innerHTML = nikod;
}
