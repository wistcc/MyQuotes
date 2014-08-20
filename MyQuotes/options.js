chrome.storage.sync.get(["quotes"], function(items){
	var ul = document.getElementById('savedQuotesUl');
	ul.innerHTML = "";

	if(items.quotes){
		for(var i = items.quotes.length -1; i >= 0; i--){
			ul.innerHTML += "<li>" + items.quotes[i] + " <input type='button' id='quote" + i + "' class='deleteQuote' value='Delete quote'/> </li>";
		}

		var quoteBtns = document.getElementsByClassName('deleteQuote');

		for(var i = quoteBtns.length -1; i >= 0; i--){
			quoteBtns[i].onclick = function(){
				if(confirm("Are you sure you want delete this quote?")){
					items.quotes.splice([this.id.replace('quote','')],1);
					chrome.storage.sync.set({ "quotes": items.quotes });
					
					location.reload();				
				}
			}
		}
	}
	else{
		ul.innerHTML = '<li>You have not saved any quote. Just select a text, right click and "save quote".</li>';
	}
});