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

	it("encodes yes", function() {
    	expect(cipher.encode('yes')).toEqual('bvh');
  	});

  	it("encodes OMG", function() {
	    expect(cipher.encode('OMG')).toEqual('lnt');
  	});

  	it("encodes O M G", function() {
	    expect(cipher.encode('O M G')).toEqual('lnt');
  	});

  	it("encodes long words", function() {
	    expect(cipher.encode('mindblowingly')).toEqual('nrmwy oldrm tob');
  	});

  	it("encodes numbers", function() {
	    expect(cipher.encode('Testing, 1 2 3, testing.'))
	      .toEqual('gvhgr mt123 gvhgr mt');
  	});

  	it("encodes sentences", function() {
	    expect(cipher.encode('Truth is fiction.')).toEqual('gifgs rhurx grlm');
  	});

  	it("encodes all the things", function() {
	    expect(cipher.encode('The quick brown fox jumps over the lazy dog.'))
	      .toEqual('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt');
  	});
});