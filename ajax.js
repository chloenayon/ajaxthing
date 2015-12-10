console.log("HELLO (Javascript Loaded)");
var cat = "http://random.cat/meow"

var printresults = function(d){
		console.log(d);
};

var getData = function(){
	console.log("Getting new cat");
	$.getJSON(cat,function(data){
		console.log(data);
		$("#cathere").attr("src",data['file']);
	});
}

console.log("Updating on Interval");
var interval = setInterval(getData,5000);

$("#stop").click(function(){
	clearInterval(interval);
});

var stuffdemo = function(){

		console.log("Calling getstuff");

		$.get("/getstuff",function(d){
				console.log("getstuff returned: "+d);
		});


		
		console.log("back from getstuff");

};

var paramtest = function paramtest(){
		$.getJSON("/upcase",{data:'hello'},function(d){
				console.log(d);
				console.log(d.result);
		});

};


$("#b").click(function(){
		var input = $("#data");
		var d = input.val();
		input.val("");
		$.getJSON("/upcase",{data:d},function(d){
				$("#result").text(d.result);
				$("#thelist").append($("<li>"+d.result+"</li>"));
		});
});