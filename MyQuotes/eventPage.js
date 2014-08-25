//Create contextMenu
var menuItem = {
	"id": "saveQuote",
	"title": "Save quote",
	"contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

//Setting the badge
chrome.storage.sync.get(["quotes"], function(items){
	chrome.browserAction.setBadgeText({ "text": items.quotes.length.toString() });
});

//Waiting for the context menu to be clicked to add the quote
chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId == "saveQuote" && clickData.selectionText){
		chrome.storage.sync.get(["quotes"], function(items){
			var newQuote = items.quotes;

			if(newQuote){
				newQuote[newQuote.length] = clickData.selectionText;
			}
			else{
				newQuote = [clickData.selectionText];
			}

			//Saving quote
			chrome.storage.sync.set({ "quotes": newQuote });

			//Create notification		
			var opt = {
				type: "basic",
				title: "Quote saved",
				message: clickData.selectionText,
				iconUrl: "images/icon128.png"
				}
			
			chrome.notifications.create('', opt, function(){});			
		});
	}
});

//Setting the badge after a new quote is added
chrome.storage.onChanged.addListener(function(){
	chrome.storage.sync.get(["quotes"], function(items){
		chrome.browserAction.setBadgeText({ "text": items.quotes.length.toString() });
	});
});