chrome.storage.sync.get(["quotes"], function(items){
	var ul = document.getElementById('quotesUl');
	ul.innerHTML = "";

	if(items.quotes){
		for(var i = items.quotes.length -1; i >= 0; i--){
			ul.innerHTML += "<li><div> <img src='images/left.png' class='imgQuote' alt='' />" + items.quotes[i] + "<img src='images/right.png' class='imgQuote' alt='' /> </div></li>";	
		}
	}
	else{
		ul.innerHTML = "<li><img src='images/left.png' class='imgQuote' alt='' /><strong>You have not saved any quote. Just select a text, right click and \"save quote\".</strong> <img src='images/right.png' class='imgQuote' alt='' /> </li>";
	}
});