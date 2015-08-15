/*
 * The cipher function should conforms to the following encryption requirement.
 * 	1. Based on the algorithm it should correctly encrypt the input text.
 		- Build the algorithm, from the following hints
 			Test => gvhg
 			Truth => gifgs
 * 	2. Returned cipher text should with a fixed number of characters in a word.
 		- that is, all words should be of length 5 characters.
 		- Two word should be separated by a space.
 * 	3. It should work as case-insensitive. Returns always in lowercase.
 *	4. It should not encrypt numbers.
 * 	5. Disregards all special characters line `fullstop` (.)
 */
var cipher  = require('../cipher/cipher');

describe("encode", function() {

	it("encodes no", function() {
		expect(cipher.encode('no')).toEqual('ml');
	});

	//Keep adding your test case following the above template for your local tests.
	//DO NOT COMMIT THIS FILE.
});