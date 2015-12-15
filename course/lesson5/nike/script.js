// JavaScript Document
var ifOpen = false;

$(document).ready(function(){
	$(".hamburger").click(function(){
		$("nav").toggleClass("nav2");
		//$("nav").fadeToggle(600);
	/*	if(ifOpen == false)
				{
					$("nav").show(700);
						ifOpen = true;
				}
		else
				{
				ifOpen = false;
				$("nav").hide(700);
				}*/		
		})	
})