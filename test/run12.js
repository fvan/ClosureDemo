/**
 * callbacks
 * 
 */

Test.prototype.test12 = function() {
	
	var callback = function(x) {
		alert(x);
	}

	var functionWhichCallsAClosureTakingAValue = function(callback) {
		callback('value');
	}

	functionWhichCallsAClosureTakingAValue(callback); // value

};