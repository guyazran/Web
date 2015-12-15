// JavaScript Document

var nikod = 0;
var haim = 5;


	function init()
	{
		document.getElementById("score").innerHTML = nikod;
		document.getElementById("lives").innerHTML = haim;

		//addLife();
		addScoreAndLife(5,200);
		initMario();
		//document.getElementById("score").innerHTML = doubleScore();
	}

	function doubleScore()
	{
		var rt;
		rt = nikod*2;
		return rt;
	}

	function addLife()
	{
		haim++;
		document.getElementById("lives").innerHTML = haim;	
	}

	

	function addScoreAndLife(life,score)
	{
		haim += life;
		nikod += score;
		document.getElementById("score").innerHTML = nikod;
		document.getElementById("lives").innerHTML = haim;
	}	

	function square(x)
	{
		var rt;
		rt= x*x;
		return rt;
	}

	function calcMaamTax(price)
	{
		var rt;
		rt = price*1.18;
		return rt;
	}
	
	function addXlife(x)
	{
		haim += x;
			
		document.getElementById("lives").innerHTML = haim;
		
		if(haim >= 40)
		{
				document.getElementById("score").innerHTML = "Game over";
		}
	}
	

	