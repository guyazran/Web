function onBtnClick()
{
	var new_name = document.getElementById("name");
	var new_li = document.createElement("li");
	new_li.innerHTML = new_name.value;
	//document.getElementById("the_list").appendChild(new_li);
	var the_li = document.getElementById("the_list").getElementsByTagName("li")[1];
	document.getElementById("the_list").insertBefore(new_li, the_li);
}