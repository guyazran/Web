$(document).ready(function(){
	$("#the_h1").css("border","2px solid red");
	$("li:first").css("color","red");
	$("header > img").attr("width","500px");
	$("header > img").addClass("img_new");
	$("#the_h1").html("THE NEW CONTENT H1");
	$(".txt_point ul").append("<li>New li</li>");
	$(".txt_point ul").prepend("<li>New li</li>");
	$(".txt_point ul li:nth-of-type(3)").after("<li>New li</li>");
	$("header > img").wrap("<a href='http://monkeys.co.il'>");
});