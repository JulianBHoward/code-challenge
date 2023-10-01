const findSum =  function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
    };

    const findFrequency = function (array) {

      if (array.length === 0) {
        return { most: undefined, least: undefined };
      }
    
      const frequencyAnswer = {};
      let mostFrequent = array[0];
      let leastFrequent = array[0];
    
      array.forEach((str) => {
        frequencyAnswer[str] = (frequencyAnswer[str] || 0) + 1;
    
        if (frequencyAnswer[str] > frequencyAnswer[mostFrequent]) {
          mostFrequent = str;
        }
    
        if (frequencyAnswer[str] < frequencyAnswer[leastFrequent]) {
          leastFrequent = str;
        }
      });
    
      return { most: mostFrequent, least: leastFrequent };
    };
   
const isPalindrome = function(str) {
    const array = str.split('');
    const arrayReverse = array.reverse();
    const reverse = arrayReverse.join('');

    if(str === reverse){
        return true
    } else{
        return false
    }
};


const largestPair = function(array) {
    
    var products =[];
for (var i = 0; i < array.length; i++){
    
    var currentNum = array[i];
    var nextNum = array [i+1];

    var product = currentNum * nextNum;
    
    if(product){
        products.push(product);
    }


}
 
var largestProduct = Math.max (...products);

return largestProduct;

};

const removeParenth = function(str) {
    const openParenth = str.indexOf('(');
    
    const closeParenth = str.indexOf(')');
    
    const originalString = str.slice(0, openParenth);
    
    const newString = str.slice(closeParenth + 1);
    
    
    return originalString + newString;
   };

const scoreScrabble = function(str) {
   
    const scrabbleScores = {
        a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8,
        k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1,
        u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
      };
    
      let sum = 0;
      for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (letter in scrabbleScores) {
          sum += scrabbleScores[letter];
        }
      }
    
      return sum;
  };
