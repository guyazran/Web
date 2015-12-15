// JavaScript Document

var letters_ar = new Array();
var x;

$(document).ready(function(){
	letters_ar = ["A","B","C","D","E","F"];
	x=0;
	$("#btn").click(change);
});

function change()
{
	if(x==letters_ar.length)
	{
		x=0;
	}
	$("h2").html(letters_ar[x]);
	x++
}