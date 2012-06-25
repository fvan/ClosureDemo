/**
	Multiple closures generated from the same place in the code.
 */

Test.prototype.test05 = function() {

	function getClosure() {
		var x = 10;
		return function() {
			alert(++x);
		};
	}

	var closure = getClosure();
	closure(); // 11
	closure(); // 11 or 12

	var closure2 = getClosure();
	closure2(); // 11 or 13
	
	closure(); // 11 or 13 or 14

};