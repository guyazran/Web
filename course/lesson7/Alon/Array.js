// JavaScript Document
var letters_ar;
var sr;
$(document).ready(function(){
	st = "ofer";
	
	letters_ar = new Array("A","B","C","D","E");
	AL = letters_ar;
	//alert(letters_ar[1])
	//letters_ar[4] = "F";
	letters_ar.push("F"); // add in last cell
	letters_ar.unshift("Z") // add in first cell
	//letters_ar.pop(); // remove the last cell
	//letters_ar.shift(); // remove the first cell
	//letters_ar.splice(2,1);// remove specific cell and tha amount of cells from the chosen cell (2(from cell number 2),1(remove only one cell))(2,1)
	//letters_ar.splice(letters_ar.indexOf("C"),1);
 	console.log(letters_ar);
	$("#btn").click(function(){
		abc();
		})
/*	var i = 0;
	while(i  < 6)
		{
			$("h2").append(i + "<br>");
			i++;	
		}*/
	/*for(i= 0;  i<100;  i++)
		{
			$("h2").append(i +"<br>");	
		}*/
	
	;
	
})
var counter = 0;
function abc()

	{
		if(counter == letters_ar.length)
		{
			counter=0;	
		}
		$(".letters").html(AL[counter]);
		counter++;
	}
