# Lingual
> Implementing common phonetics algorithms in NodeJS

[![npm version](https://badge.fury.io/js/lingual.svg)](http://badge.fury.io/js/lingual)

## Getting it 

Install the module via npm 
```
$ npm install lingual
```

Require it in your script 
```js
var lingual = require('lingual');
```

## Soundex 
[Soundex](https://en.wikipedia.org/wiki/Soundex) is an algorithm typically used to index English names. Strings are converted to a four character code based on how they sound when spoken, i.e. strings that sound similar when spoken tend to have similar soundex codes. 

You can pass in arbitrary words like so 
```js
var soundex = lingual.soundex; 
soundex('Ashcraft'); 
// A261
```

Or an array of words 
```js
var arrayOfNames = ['Knuth', 'Hilbert'];
soundex(arrayOfNames);
// ['K530', 'H416']
```

## Hamming Distance 
[Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) represents the number of characters in one string that need to be changed in order to transform it into another one. This is a good indicator of accidental corruption / typos in a word.
```js
var hamming = lingual.hamming; 
hamming('Lingual', 'Lingaul');
// 2 
```

## White Similarity 
[White similarity](http://www.catalysoft.com/articles/strikeamatch.html) is an algorithm used to determine how close two strings based on the number of consecutive character pairs they have in common. Returns the similarity as a decimal between 0 (completely dissimilar) and 1 (identical)
```js
var white = lingual.white; 
white('Healed', 'Sealed'); 
// 0.80
```

## Testing 
```
$ npm install
$ npm test
```

More algorithms are being added, as well as an optimized version of soundex, more suitable for American English. 

## License
The MIT License (MIT)

Copyright (c) 2015 Sanchit Gera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
