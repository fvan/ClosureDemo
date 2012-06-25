 /**
 * Note that x lives on in the example below even after the function buildClosure is finished. 
 * For closures to work the lifetime of the environment exceeds that of the referencing closure.
 */

Test.prototype.test02 = function() {

	function getClosure() {
		var x = 10;
		return function() {
			alert(x);
		};
	}

	var closure = getClosure();
	closure();  // 10
};

