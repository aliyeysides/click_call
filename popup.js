
$(document).ready(function() {

	// function populateNumber(){
	// 	console.log(document.getElementbyId('phone'))
	// }
    var sinchClient = new SinchClient({applicationKey: 'aa0ea37d-c1e8-49bb-8fa4-0002452b81cf', capabilities: {calling: true}});
    var callListeners = {
        onCallEstablished: function(call) {
            $('audio').attr('src', call.incomingStreamURL); //If audio element has attribute "autoplay"
        },
    }
    var callClient = sinchClient.getCallClient();
    var call;
    $('#call').click(function() {
        sinchClient.start({username:'user', password:'pass'}, function() {
        call = callClient.callPhoneNumber("phone number here");
        call.addEventListener(callListeners);
        }).fail(console.log("did not start"));
    });
    $('#end').click(function() {
        call.hangup();
    });

		chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
			if (message.method === "make call"){
				console.log("dickbutt")
				console.log(message.phone)
			}
		})
});

