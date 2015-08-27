var generatePairs = function(string) {
  superPairs = string.toUpperCase()
    .replace(/[^A-Z ]+/g, '')
    .split(/\s+/);

  superPairs = superPairs
    .map(function(word) {
      breaks = [];
      for (var i = 0; i < word.length - 1; i++) {
        breaks.push(word.slice(i, i + 2));
      }
      return breaks;
    });
  pairs = [].concat.apply([], superPairs);
  return pairs;
}

var whiteSimilarity = function(string1, string2) {
  var pairs1 = generatePairs(string1);
  var pairs2 = generatePairs(string2);
  var union = pairs1.length + pairs2.length;
  var hitCount = 0;
  for (x in pairs1) {
    for (y in pairs2) {
      if (pairs1[x] == pairs2[y]) {
        hitCount++;
        pairs2[y] = '';
      }
    }
  }
  score = ((2.0 * hitCount) / union).toFixed(2);
  return score;
}

module.exports = whiteSimilarity;
