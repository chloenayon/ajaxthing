console.log("HELLO (Javascript Loaded)");
var cat = "http://random.cat/meow"

var getData = function(){
	console.log("Getting new cat");
	$.getJSON(cat,function(data){
		//console.log(data);
		$("#cathere").attr("src",data['file']);
	});
}

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
