chrome.storage.sync.get(["quotes"], function(items){
	var randomQuote = document.getElementById('randomQuote');
	randomQuote.innerHTML = "";

	if(items.quotes){
		randomQuote.innerHTML = "<li> <img src='images/left.png' class='imgQuote' alt='' />" + items.quotes[Math.floor(Math.random()*items.quotes.length)] + "<img src='images/right.png' class='imgQuote' alt='' /> </li>";	
	}
	else{
		randomQuote.innerHTML = "<li><img src='images/left.png' class='imgQuote' alt='' /><strong>You have not saved any quote. Just select a text, right click and \"save quote\".</strong> <img src='images/right.png' class='imgQuote' alt='' /> </li>";
	}
});