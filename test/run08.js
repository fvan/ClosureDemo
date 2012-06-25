/**
 * Be careful though with variable naming because this will do the following,
 */

Test.prototype.test08 = function() {

	var x = 10;
	var capturedClosure = function() {
		alert(x); 
	};
	
	// ...
	var x = 100;
	// ...
	
	capturedClosure(); // 10 or 100

};