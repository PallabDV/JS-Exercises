var cipher  = require('../cipher/cipher');

describe("encode", function() {

	it("encodes no", function() {
		expect(cipher.encode('no')).toEqual('ml');
	});

});