// JavaScript Document
var sonic1;
var ring1;
var ring2;
var ring3;
var sonic_x;
var ring_x1;
var ring_x2;
var ring_x3;

var ring1_take = false;



function initsonic()
{
	sonic1 = document.getElementById("sonic");
	ring1 = document.getElementById("ring1");
	ring2 = document.getElementById("ring2");
	ring3 = document.getElementById("ring3");
	sonic_x = 50;
	ring_x1 = 300;
	ring_x2 = 500;
	ring_x3 = 700;
	document.onkeydown = checkKey;
	sonic1.onclick = onSonicClick;
}

function onSonicClick(e)
{
	console.log(ring1_x1);
	sonic1.style.transform = "rotate(180deg)";	
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
	sonic_x += 10;
	sonic1.style.left = sonic_x+"px";
	sonic1.style.transform = "scaleX(1)";
	checkSonicHitTestRing1();
	checkSonicHitTestRing2();
	checkSonicHitTestRing3();
	if(sonic_x == 850)
	{
		moveLeft()
	}
	
}

function moveLeft()
{
	sonic_x -= 10;
	sonic1.style.left = sonic_x+"px";
	sonic1.style.transform = "scaleX(-1)";
	checkSonicHitTestRing1();
	checkSonicHitTestRing2();
	checkSonicHitTestRing3();
	if(sonic_x <= -70)
	{
		moveRight()
	}
		if(ring1.style.transform == "scale(0,0)" && ring2.style.transform == "scale(0,0)" && ring3.style.transform == "scale(0,0)")
		{
				nikod;
				document.getElementById("score").innerHTML = nikod;
		}	
}

function checkSonicHitTestRing1()
{
	if(sonic_x >  ring_x1-5 && sonic_x <  ring_x1+5 )
	{
		ring1.style.transform = "scale(0,0)";
		//mario1.style.transform = "rotate(360deg)";
		addscore();	
		ring1_take = true;
	}
	
		if(ring1.style.transform == "scale(0,0)")
		{
				nikod;
				document.getElementById("score").innerHTML = nikod;
		}	
}

function checkSonicHitTestRing2()
{
	if(sonic_x >  ring_x2-5 && sonic_x <  ring_x2+5)
	{
		ring2.style.transform ="scale(0,0)";
		//mario1.style.transform = "rotate(360deg)";
		addscore();	
	}
}

function checkSonicHitTestRing3()
{
	if(sonic_x >  ring_x3-5 && sonic_x <  ring_x3+5)
	{
		ring3.style.transform = "scale(0,0)";
		//mario1.style.transform = "rotate(360deg)";
		addscore();	
	}
	
}

