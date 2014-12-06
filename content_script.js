var ClickCall = ClickCall || {};


ClickCall = function(number){
	this.number = number;
	this.numbers = document.getElementsByClassName('biz-phone');
	this.turnToLink();
}

ClickCall.prototype = {

	turnToLink: function(){
		console.log(this.number, "this.number")
		console.log(this.numbers, "this.numbers")
		var newNode = this.numbers.createElement('a')
		this.numbers.appendChild(newNode)
		// var aTag = document.createElement("a");
	}

}

function main(){
	var numbers = document.getElementsByClassName('biz-phone');
	for (i=0;i<numbers.length;i++){
		var digits = numbers[i].innerHTML
		numbers[i].clickCall = new ClickCall(digits);
	}
}

window.addEventListener('load', function(){
	main();
});





