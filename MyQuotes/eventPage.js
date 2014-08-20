var menuItem = {
	"id": "saveQuote",
	"title": "Save quote",
	"contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

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

			chrome.storage.sync.set({ "quotes": newQuote });

			//Create notification		
			var opt = {
				type: "basic",
				title: "Quote saved",
				message: clickData.selectionText,
				iconUrl: "128x128.png"
				}
			
			chrome.notifications.create('', opt, function(){});			
		});
	}
});

chrome.storage.onChanged.addListener(function(){
	chrome.storage.sync.get(["quotes"], function(items){
		chrome.browserAction.setBadgeText({ "text": items.quotes.length.toString() });
	});
});