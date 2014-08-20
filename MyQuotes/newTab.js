chrome.storage.sync.get(["quotes"], function(items){
	var span = document.getElementById('quotesSpan');
	span.innerHTML = "";

	if(items.quotes){
		span.innerHTML = items.quotes[Math.floor(Math.random()*items.quotes.length)];	
	}
	else{
		span.innerHTML = '<li>You have not saved any quote. Just select a text, right click and "save quote".</li>';
	}
});