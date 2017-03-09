// var target = document.querySelector(".top");
// target.textContent = 'hoho';



function myFunction(){
	var target = document.getElementById("topText").innerText;
	var typing = document.getElementById("myText").value;
	console.log(typing);
	if(!target.startsWith(typing)){
		document.getElementById("myText").style.backgroundColor = "lightblue";
	}
	if(target.startsWith(typing)){
		document.getElementById("myText").style.backgroundColor = "white";
	}
}



//var target = document.querySelector(".bottom");
//var newContent = 'test1';
//target.textContent = newContent;
//readTextFile(fileUpload) + 