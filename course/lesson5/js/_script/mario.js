// JavaScript Document
var mario1;
var mushroom1;
var mario_x;
var mushroom_x;

function initMario()
{
	mario1 = document.getElementById("mario");
	mushroom1 = document.getElementById("mushroom");
	mario_x = 50;
	mushroom_x = 300;
	document.onkeydown = checkKey;
	mario1.onclick = onMarioClick;
}

function onMarioClick(e)
{
	console.log(mario_x);
	mario1.style.transform = "rotate(180deg)";	
}

function checkKey(e)
{
	//right
	if(e.keyCode == 39)
	{
		moveRight();	
	}
	//left
	if(e.keyCode == 37)
	{
		moveLeft();	
	}
	//alert(e.keyCode);
}

function moveRight()
{
	mario_x += 10;
	mario1.style.left = mario_x+"px";
	mario1.style.transform = "scaleX(-1)";
	checkMarioHitTestMushroom();
	
}

function moveLeft()
{
	mario_x -= 10;
	mario1.style.left = mario_x+"px";
	mario1.style.transform = "scaleX(1)";
	checkMarioHitTestMushroom();
}

function checkMarioHitTestMushroom()
{
	if(mario_x >  mushroom_x-10 && mario_x <  mushroom_x+10)
	{
		mushroom1.style.transform = "scale(0,0)";
		//mario1.style.transform = "rotate(360deg)";	
	}
}