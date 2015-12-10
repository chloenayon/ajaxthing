console.log("HELLO (Javascript Loaded)");
var cat = "http://random.cat/meow"

var getData = function(){
	console.log("Getting new cat");
	$.getJSON(cat,function(data){
		//console.log(data);
		$("#cathere").attr("src",data['file']);
	});
}

// api key = 2d0f6fb08bbdc443a85afa2bb39823fa
var searchurl =
"https://api.flickr.com/services/rest/?method=flickr.photos.search& \
api_key=fcf1732b2d4886c106cdbb3e13904ec1&tags=cats&format=json&nojsoncallback=1 \
&per_page=1&safe_search=1";
var contexturl =
"https://api.flickr.com/services/rest/?method=flickr.photos.getInfo& \
api_key=fcf1732b2d4886c106cdbb3e13904ec1&photo_id=23030495873&format=json&nojsoncallback=1";

console.log("Attempting to access flickr");
$.getJSON(searchurl,function(data){
	$.getJSON(contexturl,function(data){
		var flickrurl = data['photo']['urls']['url'][0]['_content'];
		console.log(flickrurl);
		$("#flickrhere").attr("src",flickrurl);
	});
});

var searchCat = function searchCat(s){
//    $.getJSON();
};

console.log("Updating on Interval");
var interval = setInterval(getData,5000);

$("#stop").click(function(){
	clearInterval(interval);
});

$("#find").click(function(){
    var data = document.getElementById("params").value;
    console.log(data);
    searchCat(data);
});


