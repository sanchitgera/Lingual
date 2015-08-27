var soundex = require('../lib/soundex');
var expect = require('chai').expect;

describe('Soundex', function() {
  it('should match common names correctly', function() {
    var seedData = {
      'Euler': 'E460',
      'Ellery': 'E460',
      'Gauss': 'G200',
      'Ghosh': 'G200',
      'Hilbert': 'H416',
      'Heilbronn': 'H416',
      'Knuth': 'K530',
      'Kant': 'K530',
      'Lloyd': 'L300',
      'Ladd': 'L300',
      'Lukasiewicz': 'L222',
      'Lissajous': 'L222',
      'SanFrancisco': 'S516'
    }

    for (var key in seedData) {
      expect(soundex(key)).to.equal(seedData[key]);
    }
  });

  it('should strip special characters and digits', function() {
    var seedData = {
      'Ell#4ery': 'E460',
      'Hil1be09rt': 'H416',
      'Hei@#lbro4nn': 'H416',
      'Knu//th': 'K530',
      'L+lo=yd': 'L300',
    }

    for (var key in seedData) {
      expect(soundex(key)).to.equal(seedData[key]);
    }
  })
});
