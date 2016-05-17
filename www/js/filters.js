angular.module('starter.filters', [])

.filter('short', function(){
	return function(input){
		return input[0] + input[ input.length - 1 ] ;
	}
})

.filter('reverse', function(){
	return function(input){
		var result = "";
		for (var i = input.length - 1; i >= 0; i--) {
			result+= input[i];
		};
		return result;
		//return input.split("").reverse().join("");
	}
});