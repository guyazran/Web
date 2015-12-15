$(document).ready(function(){
	/*$("header img").click(onImgClick);*/
	
	/*$("header img").click(function(){
		$("ul").css("border","2px solid red");
	});*/
	
	/*$("header img").mouseover(function(){
		$("ul").css("border","2px solid red");
	});
	
	$("header img").mouseout(function(){
		$("ul").css("border","none");
	});*/
	
	/*$("header img").hover(
	function()
	{
		$("ul").css("border","2px solid red");
	},
	function()
	{
		$("ul").css("border","none")
	});*/
	
	/*$("header img").click(imgClick);*/
	
	$("header img").toggle(onImgClick1,onImgClick2,onImgClick3);
	
	$("#send_btn").click(function(){
		if($("input[name='txtPhone']").val().length < 9)
		{
			alert("number too short");
		}
		else if($("input[name='txtMail']").val().indexOf("@") < 1 || $("input[name='txtMail']").val().indexOf(".") < 1)
		{
			alert("invalid email");
		}
		else
		{
			$("#the_form").submit();
		}
	});
});

function onImgClick()
{
	$("ul").css("border","2px solid red");
}

function imgClick()
{
	$("ul").toggleClass("img_new");
}

function onImgClick1()
{
	$("ul").css("border","2px solid red");
}

function onImgClick2()
{
	$("ul").css("border","2px solid green");
}

function onImgClick3()
{
	$("ul").css("border","2px solid blue");
}