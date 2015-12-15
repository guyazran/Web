// JavaScript Document
var sonic;
var sonic_x;
var sonic_y;
var heart;
var heart_x;
var skull;
var skull_x;
var timer;
var counter = 0;
var ifJump = false;
var jumpHeight = 0;

var onKeyLemala = false;
var onKeyYemina = false;
var onKeySmola = false;

$(document).ready(function(){
		timer = setInterval(update,1000/30);
		
})

function update()
{
	console.log("22");
	if(onKeyLemala == true && !ifJump)
	{
		jump();
	}
	if(onKeyYemina == true)
	{
		moveRight();
	}
	if(onKeySmola == true)
	{
		moveLeft();
	}
}

function jump()
{
	ifJump = true;
	moveUp();
}

function addCounter()
{
	counter++;
	console.log(counter)
	$("#score").html(counter);
	if(counter == 10)
	{
		clearInterval(timer);	
	}

}

function initSonic()
{
	sonic = document.getElementById("sonic");
	heart = document.getElementById("heart");
	skull = document.getElementById("skull");
	sonic_x = 0;
	sonic_y = 211;
	heart_x = 210;
	skull_x = 429;
	document.onkeydown = checkKeyDown;	
	document.onkeyup = checkKeyUp;
}

function checkKeyDown(e)
{
	if(e.keyCode == 38)
	{
		onKeyLemala = true;	
	}
	if(e.keyCode == 39)
	{
		onKeyYemina = true;	
	}
	if(e.keyCode == 37)
	{
		onKeySmola = true;	
	}
}

function checkKeyUp(e)
{
	if(e.keyCode == 38)
	{
		onKeyLemala = false;	
	}
	if(e.keyCode == 39)
	{
		onKeyYemina = false;	
	}
	if(e.keyCode == 37)
	{
		onKeySmola = false;	
	}
}


function moveRight()
{
	if(sonic_x < 832)
	{
	sonic_x += 10;
	sonic.style.left = sonic_x+"px"; //left is x axis and top is y axis
	sonic.style.transform = "scaleX(1)";
	checkSonicHitHeart();
	checkSonicHitSkull();
		if(sonic_x > 600)
		{
			clearInterval(timer);
		}
	}
}

function moveLeft()
{
	if(sonic_x > 0)
	{
	sonic_x -= 10;
	sonic.style.left = sonic_x+"px";
	sonic.style.transform = "scaleX(-1)";
	checkSonicHitHeart();
	checkSonicHitSkull();
	}
}

function moveUp()
{
	sonic_y -= 10;
	sonic.style.top = sonic_y+"px";
	jumpHeight +=10;
}

function moveDown()
{
	sonic_y += 10;
	sonic.style.top = sonic_y+"px";
	jumpHeight -=10;
}

function checkSonicHitHeart()
{
	if(sonic_x > heart_x-110 && sonic_x < heart_x+20)
	{
		heart.style.transform = "scale(0,0)";
		sonic.style.transform = "scale(1.5,1.5)";
		addScore(10);
		heart_x = 999999;
	}
}

function checkSonicHitSkull()
{
	if(sonic_x > skull_x-70 && sonic_x < skull_x+20)
	{
		skull.style.transform = "scale(0,0)";
		sonic.style.transform = "scale(0,0)";	
	}
		
}