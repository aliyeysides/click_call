var ClickCall = ClickCall || {};


ClickCall = function(number){
	this.number = number;
	// format the number to include +1
	this.digit = "+1" + this.number.innerHTML
	this.numbers = document.getElementsByClassName('biz-phone');
	this.turnToLink();
	this.assignClickEvent();
}

ClickCall.prototype = {

	turnToLink: function(){
		// wraps the number in an a tag
		this.number.innerHTML = ""
		var newNode = document.createElement('a')
		var digitContent = document.createTextNode(this.digit)
		// gives the number a class
		newNode.setAttribute("class", "ClickCall-Call")
		newNode.appendChild(digitContent)
		this.number.appendChild(newNode);
	},

	assignClickEvent: function(){
		var link = this.number
		link.addEventListener('click', function(event){
			chrome.runtime.sendMessage({
				method: "make call",
				phone: this.digit
			});
		}.bind(this))
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


