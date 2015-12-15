// JavaScript Document

var nikod = 0;
var haim = 5;


	$(document).ready(function(){
		//document.getElementById("score").innerHTML = nikod;
		$("#score").html(nikod);
		//document.getElementById("lives").innerHTML = haim;
		$("#lives").html(haim);
		$("#sonic img").attr("height","200px");
		$("#sonic img").css("transform","rotate(90deg)");
		$("#sonic").css("top","200px");
		//addLife();
		addScoreAndLife(5,200);
		initsonic();
		//document.getElementById("score").innerHTML = doubleScore();
		
	});

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

	function addscore()
	{
		nikod++;
		document.getElementById("score").innerHTML = nikod;
		
		
	}


	function addScoreAndLife(life,score)
	{
		haim += life;
		nikod += score;
		//document.getElementById("score").innerHTML = nikod;
		$("#score").html(nikod);
		//document.getElementById("lives").innerHTML = haim;
		$("#lives").html(haim);
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
	

	