chrome.storage.sync.get(["quotes"], function(items){
	var ul = document.getElementById('quotesUl');
	ul.innerHTML = "";

	if(items.quotes){
		for(var i = items.quotes.length -1; i >= 0; i--){
			ul.innerHTML += "<li>" + items.quotes[i] + "</li>";			
		}
	}
	else{
		ul.innerHTML = '<li>You have not saved any quote. Just select a text, right click and "save quote".</li>';
	}
});