chrome.storage.sync.get(["quotes"], function(items){
	var ul = document.getElementById('savedQuotesUl');
	ul.innerHTML = "";

	if(items.quotes){
		for(var i = items.quotes.length -1; i >= 0; i--){
			ul.innerHTML += "<li> <img src='images/left.png' class='imgQuote' alt='' />" + items.quotes[i] + "<img src='images/right.png' class='imgQuote' alt='' /> <input type='button' id='quote" + i + "' class='deleteQuote btn btn-danger' value='Delete quote'/> </li>";
		}

		var quoteBtns = document.getElementsByClassName('deleteQuote');

		for(var i = quoteBtns.length -1; i >= 0; i--){
			quoteBtns[i].onclick = function(){
				if(confirm("Are you sure you want delete this quote?")){
					items.quotes.splice([this.id.replace('quote','')],1);

					if(items.quotes.length != 0){
						chrome.storage.sync.set({ "quotes": items.quotes });
					}
					else{
						chrome.storage.sync.set({ "quotes": null });						
					}
					
					location.reload();				
				}
			}
		}
	}
	else{
		ul.innerHTML = "<li><img src='images/left.png' class='imgQuote' alt='' /><strong>You have not saved any quote. Just select a text, right click and \"save quote\".</strong> <img src='images/right.png' class='imgQuote' alt='' /> </li>";
	}
});