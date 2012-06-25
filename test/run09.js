/**
 * Javascript gotcha!
 */

Test.prototype.test09 = function() {

	for ( var i = 0; i < 1; i++) {
		var z = 20;
	}

	alert(z); // undefined or 20

};