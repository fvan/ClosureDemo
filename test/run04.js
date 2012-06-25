/**
 * Multiple closures defined from the same environment. 
 */

Test.prototype.test04 = function() {

	var x = 10;

	var capturedClosure = function() {
		alert(x);
	};

	(function() {
		x = x * x
	})();

	capturedClosure(); // 10 or 100

};