chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	console.log(message.phone)
  // if (message.method === "add note"){
  //   addNote(message.url, message.note)
  // } else if (message.method === "remove note"){
  //   removeNote(message.url, message.index)
  // }
  sendResponse(console.log("got it brah"))
})
