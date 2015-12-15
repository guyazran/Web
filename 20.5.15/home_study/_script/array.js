var letters_ar;

function init()
{
	//letters_ar = new Array("a","b","c","d");
	letters_ar = ["R","z","b","c","d"];
	//letters_ar[4] = "e";
	//letters_ar.push("e");
	//letters_ar.unshift("a");
	//letters_ar.pop();
	//letters_ar.shift();
	//letters_ar.splice(2,1);
	letters_ar.splice(letters_ar.indexOf("b"),1);
	console.log(letters_ar);
}