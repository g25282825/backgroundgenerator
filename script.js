var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function cssInitialContent(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

window.addEventListener("load", cssInitialContent);
randomBtn.addEventListener("click", function(){
	var colorStr1="#";
	var colorStr2="#";
	//字符串的每一字符的范围
	var randomArr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	//产生一个六位的字符串
	for(var i=0;i<6;i++){
		//15是范围上限，0是范围下限，两个函数保证产生出来的随机数是整数
		colorStr1+=randomArr[Math.ceil(Math.random()*(15-0)+0)];
		colorStr2+=randomArr[Math.ceil(Math.random()*(15-0)+0)];
	}
	color1.value=colorStr1;
	color2.value=colorStr2;
	document.querySelector("body").style.background="linear-gradient(to right,"+colorStr1+","+colorStr2+")";
})

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


window.onload = function() {
  //var body=document.querySelector("body").style.background.linear-gradient.gradient();
  //doSomethingElse();
  css.textContent = body.style.background + ";";
};
