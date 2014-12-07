$(document).ready(function() {

    var sinchClient = new SinchClient({applicationKey: '67d1fdec-e33e-43a9-aab1-552aa18cf7e2', capabilities: {calling: true}});
    var callListeners = {
        onCallEstablished: function(call) {
            $('audio').attr('src', call.incomingStreamURL); //If audio element has attribute "autoplay"
        },
    }
    var callClient = sinchClient.getCallClient();
    var call;
    function makeCall(number){
				console.log("im trying to call")
        sinchClient.start({username:'brianborge@gmail.com', password:'@$bB2012?'}, function() {
        call = callClient.callPhoneNumber(number);
        call.addEventListener(callListeners);
        }).fail(console.log("did not start"));
    };

    $('#end').click(function() {
        call.hangup();
    });

		chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
			if (message.method === "make call"){
				chrome.tabs.create({url: "test.html"})
				// makeCall(message.phone);
			}
		})
});

