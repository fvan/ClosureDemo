/**
 * Closures are a function together with a captured (lexicographical) environment.


	Any function in javascript will form a closure, even if it is the top level environment.
	Thus, the function bellow is bound in the closure to the 
	variable x as it is in its creating environment.

 */

Test.prototype.test01 = function() {
	
	
	var x = 10;
	(function () {alert(x);})(); // 10

	// note the following defines a function and then calls it 
	// (function(){})()

};


/**
 * 
 * The environment that is bound is the one in which the function is created instead of called.
 * 
 * */
