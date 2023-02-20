function simpleHash(str) {
      let totalSum = 0;
      for (let i = 0; i < str.length; i++) {
        totalSum += str.charCodeAt(i);
      }
      let remainder = totalSum % 1023;
      let hashValue = remainder + 1;
      return hashValue.toString(2).padStart(10, '0');
    }


    function binaryToHex(binaryStr) {
      let decimalValue = parseInt(binaryStr, 2);
      let hexValue = decimalValue.toString(16);
      return hexValue;
    }
    
    
console.log(binaryToHex(simpleHash("vivek kadvani")))