var url = "http://steamcommunity.com/market/listings/570/Auspicious%20Deep%20Warden%27s%20Darkray%20Cape";
$.ajax({
	url:url
})
.done(function(response){
	//$('#result').append(response);
	var listing = new Product(response, url);
	debugger;
});
