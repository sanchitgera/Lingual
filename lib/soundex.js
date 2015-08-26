var soundex = function(input, opts) {
  objectType = Object.prototype.toString.call(input);

  if (objectType === '[object String]') {
    return computeSoundex(input, opts);
  } else if (objectType === '[object Array]') {
    output = input.map(function(val) {
      return soundex(val);
    });
    return output;
  }
}

function computeSoundex(string, opts) {
  var codes = {
    A: '',
    E: '',
    I: '',
    O: '',
    U: '',
    B: 1,
    F: 1,
    P: 1,
    V: 1,
    C: 2,
    G: 2,
    J: 2,
    K: 2,
    Q: 2,
    S: 2,
    X: 2,
    Z: 2,
    D: 3,
    T: 3,
    L: 4,
    M: 5,
    N: 5,
    R: 6
  };
  string = string.toUpperCase()
    .replace(/[^A-Z]+/g, '')
    .split('');
  if (!string) {
    return null;
  }

  lastCode = codes[string[0]];
  soundexCode = string[0];

  for (i = 1; i < string.length; i++) {

    code = codes[string[i]];

    if (code == 0) {
      lastCode = null;
    } else if (code && (code != lastCode)) {
      soundexCode += code;
      lastCode = code;
    }
  }

  return (soundexCode + '0000').slice(0, 4);
}

module.exports = soundex;
