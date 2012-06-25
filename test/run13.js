/**
 * callback with a more complex bounding environment
 */

Test.prototype.test13 = function() {

	function createCallback(z) {
		var y = 2;
		return function(x) {
			alert(x);
			alert(y);
			alert(z);
		}
	}

	var functionWhichCallsAFunctionTakingAValue = function(callback) {
		callback(1);
	}

	functionWhichCallsAFunctionTakingAValue(createCallback(3)); // ?
};