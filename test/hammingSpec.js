var hamming = require('../lib/hamming');
var expect = require('chai').expect;

describe('Hamming Distance', function() {
  it('shoud compute hamming distance for single words', function() {
    var base = 'Marley';

    var tests = {
      'Manley': 1,
      'Barley': 1,
      'Barney': 2,
      'Barnet': 3,
      'Carnet': 3,
      'Bottle': 6
    };

    for (var word in tests) {
      expect(hamming(base, word)).to.equal(tests[word]);
    }
  });

  it('should compute hamming distance for longer strings', function() {
    expect(hamming('I am a huge sentence', 'I am a tiny sentence')).to.equal(4);
    expect(hamming('This is very readable and has no typos', 'This is vrey readbale and has no tpoys')).to.equal(7)
  });

  it('should reject unequal strings', function() {
    expect(hamming('A word', 'A big sentence')).to.equal(-1);
  })
});
