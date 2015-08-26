var soundex = require('./lib/soundex');
var white   = require('./lib/white');
var hamming = require('./lib/hamming');

var sounds = {
  soundex: soundex,
  white: white,
  hamming: hamming
}

module.exports = sounds;
