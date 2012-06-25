var x3 = undefined;

/**
 * Multiple closures generated from the same place in the code.
 */

Test.prototype.test06 = function() {


	var closureOutside = function() {
		alert(x3);
	}
	
	var closureWithA3NestedClosure = function() {
		var x3 = 3;
		var closureWithA2NestedClosure = function() {
			var x2 = 2;
			var closureWithA1NestedClosure = function() {
				var x1 = 1;
				var closure = function() {
					alert(x1); // undefined or 1
					alert(x2); // undefined or 2
					alert(x3); // undefined or 3
					closureOutside(); // undefined or 3 
				}
				closure();
			}
			closureWithA1NestedClosure();
		}
		closureWithA2NestedClosure();
	}
	
	closureWithA3NestedClosure();
}