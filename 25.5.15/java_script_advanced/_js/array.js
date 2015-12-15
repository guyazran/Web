// JavaScript Document

var letters_ar

$(document).ready(function(){
	letters_ar = new Array("A","B","C","D","E");
	//letters_ar[4] = "F";
	//etters_ar.push("F");
	//etters_ar.pop();
	letters_ar.unshift("Z");
	//etters_ar.shift();
	//letters_ar.splice(2,1);
	letters_ar.splice(letters_ar.indexOf("C"),1);
	console.log(letters_ar);
});