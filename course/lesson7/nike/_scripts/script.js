// JavaScript Document
var ifOpen = false;

$(document).ready(function(){
	
		$(".hamburger").click(function(){
			//$("nav").fadeToggle(600);
			//$("nav").show();
			$("nav").toggleClass("nav2");
				/*if(ifOpen == false)
				{
					$("nav").show(700);
					ifOpen = true;
				}
				else{
					ifOpen = false;
					$("nav").hide(700);
				}*/
		})
		$("nav a").click(function(){
						$(this).css("background-color","red");
				})
				
		$(".logo").click(function(){
				//$("nav").append("<a href='#'>link </a>");
				//$("nav").prepend("<a href='#'>link </a>");
				//$("nav a:nth-of-type(3)").after("<a href='#'>link </a>");
				$("nav a:nth-of-type(3)").before("<a href='#'>link </a>");
				
		})
})