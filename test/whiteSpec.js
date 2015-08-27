var expect = require('chai').expect;
var white = require('../lib/white');

describe('White Similarity', function() {
  it('should be able to compare simple words', function() {
    var base = 'Healed';

    var tests = {
      'sealed': '0.80',
      'healthy': '0.55',
      'heard': '0.44',
      'herded': '0.40',
      'help': '0.25',
      'sold': '0.00'
    };

    for (var word in tests) {
      expect(white(base, word)).to.equal(tests[word]);
    }
  });

  it('should ignore special characters in strings', function() {
    var base = 'Heal@90ed2';

    var tests = {
      's-ea0led': '0.80',
      'hea-lt=hy': '0.55',
      'he\ar//d': '0.44',
      'h#er-1ded': '0.40',
      'h^e92lp%': '0.25',
      'so|#l+d': '0.00'
    };

    for (var word in tests) {
      expect(white(base, word)).to.equal(tests[word]);
    }
  });

  it('should match strings with multiple words', function() {
    expect(white('Hello World', 'Hello World')).to.equal('1.00');
    expect(white('This is a test', 'This is a test')).to.equal('1.00');
    expect(white('Quebec City', 'New York City')).to.equal('0.38');
    expect(white('Similar sentences are similar', 'Unlike sentences are unlike')).to.equal('0.48');
    expect(white('Dissimilar sentences', 'Two completely')).to.equal('0.07');
  });
});
