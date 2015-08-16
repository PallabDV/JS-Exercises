/*
 * Extend the built-in Array class with a `validate` function, which should 
 * provide an API to process all of the index values against a 
 * callback function, and finally construct & return a new array. 
 * This callback method takes each index value as an argument and
 * should return `true` or value that coerces to true. 
 * The callback function is invoked for all the indexes, which
 * has a value assigned. Indexes with undefined or deleted indices 
 * are simply ignored. 
 * Array elements which do not pass the test are simply ignored in the 
 * newly constructed array.
 *
 * Sample Implementation ****
 * The following code samples constructs a new array from a provided
 * array with values greater than 5.
 * 	var validatedArr = [1, 8, 3, 9].validate(function(value) {
 *		return value > 5;
 *	});
 *	//validatedArr is [8, 9]
 */

require('../array-validate/array-validator.js');

 describe('validate', function(){

 	it("basic validate", function() {
 		var validator = function(value) {
 			return value > 5;
 		};
 		var processedArr = [1, 8, 3, 9].validate(validator);
 		expect(processedArr).toEqual([8, 9]);
 	});

 	

 });