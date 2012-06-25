/**
 * How to fix this
 */

Test.prototype.test11 = function() {

	var functions = [];
	for ( var i = 0; i < 3; i++) {
		var closure = 
		(function(z) {
			return function() {
				alert(z);
			}
		})(i);
		functions.push(closure);
	}

	functions[0](); // 2 or 3 or 0
	functions[1](); // 2 or 3 or 1
	functions[2](); // 2 or 3 or 2

};