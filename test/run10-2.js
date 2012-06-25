/**
 * Gotcha implications
 */

Test.prototype.test10_2 = function() {

	var functions = [];

	for ( var i = 0; i < 3; i++) {
		var z = i;
		var closure = function() {
			alert(z);
		};
		functions.push(closure);
	}
	
	functions[0](); // 2 or 3 or 0
	functions[1](); // 2 or 3 or 1
	functions[2](); // 2 or 3 or 2
};
