
/**
	Changing Environment
 */

Test.prototype.test07 = function() {

	var capturedClosure = function() {
		alert(x); 
	};
	var x = 10;
	capturedClosure(); // 10 or undefined

};