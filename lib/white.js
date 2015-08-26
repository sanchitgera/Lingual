var generatePairs = function(string) {
  var pairs = [];
  string = string.toLowerCase();
  for (var i = 0; i < string.length - 1; i++) {
    pair = string.substr(i, 2);
    if (!/\s/.test(pair)) {
      pairs.push(pair);
    }
  }
  return pairs;
}

var whiteSimilarity = function(string1, string2) {
  string1 = string1.toUpperCase()
    .replace(/[^A-Z]+/g, '');
  string2 = string1.toUpperCase()
    .replace(/[^A-Z]+/g, '');

  var pairs1 = generatePairs(string1);
  var pairs2 = generatePairs(string2);
  var union = pairs1.length + pairs2.length;
  var hitCount = 0;
  for (x in pairs1) {
    for (y in pairs2) {
      if (pairs1[x] == pairs2[y]) {
        hitCount++;
      }
    }
  }
  score = ((2.0 * hitCount) / union).toFixed(2);
  return score;
}

module.exports = whiteSimilarity;
