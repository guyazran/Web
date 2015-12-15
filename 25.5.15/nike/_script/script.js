// JavaScript Document

$(document).ready(function(){
	$("header .hamburger").click(function(){
		//$("header nav").toggle(300);
		$("nav").toggleClass("nav2");
		$(".hamburger img").toggleClass("burgerImg");
	});
});