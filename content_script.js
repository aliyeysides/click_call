var ClickCall = ClickCall || {};


ClickCall = function(number){
	this.number = number;
	this.digit = this.number.innerHTML
	this.numbers = document.getElementsByClassName('biz-phone');
	this.turnToLink();
}

ClickCall.prototype = {

	turnToLink: function(){
		this.number.innerHTML = ""
		var newNode = document.createElement('a')
		var digitContent = document.createTextNode(this.digit)
		newNode.appendChild(digitContent)
		this.number.appendChild(newNode);
	}
}

function main(){
	var numbers = document.getElementsByClassName('biz-phone');
	for (i=0;i<numbers.length;i++){
		var digits = numbers[i]
		numbers[i].clickCall = new ClickCall(digits);
	}
}

window.addEventListener('load', function(){
	main();
});





