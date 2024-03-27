 function runLength(vector) {
      var result = [];
      var zeros = 0;
      var zerosTemp = '';
      var i = 0;
      for (; i < vector.length; i += 1) {
        if (vector[i] === '0') {
          zeros += 1;
        } else {
          zerosTemp = zeros.toString(2);
          result.push(new Array(zerosTemp.length).join('1'));
          result.push('0' + zerosTemp);
          zeros = 0;
        }
      }
      return result.join('');
    }

 return function (str) {
      var asciiString = convertToAscii(str);
      return runLength(asciiString);
    };

  }());

  exports.runLength = runLengthEncoding;

}(typeof exports === 'undefined' ? window : exports));
//good
