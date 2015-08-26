var hamming = function(string1, string2) {
  base = string1.split('');
  match = string2.split('');

  if (base.length != match.length) {
    return -1;
  }

  var hDistance = 0;
  for (i = 0; i < base.length; i++) {
    if (base[i] != match[i]) {
      hDistance++;
    }
  }

  return hDistance;
}

module.exports = hamming;
