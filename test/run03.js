/**
 * Multiple variables of the same name.
 */

Test.prototype.test03 = function() {

	var x = 30;

	function getClosure() {
		var x = 10;
		return function() {
			alert(x);
		};
	}

	var closure = getClosure();
	var x = 20;
	closure(); // 30 or 20 or 10

};