const findSum = function(array) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++ ) {
        sum += numbers[i];
      }
      
    let average = sum/ numbers.length;

    return average;

  };

  const findFrequency = function (array) {
    if (!array || array.length === 0) {
        return [null, null]; 
    }

    const frequencyMap = new Map();

    array.map(item => {
        const count = frequencyMap.get(item) || 0;
        frequencyMap.set(item, count + 1);
    });

    let mostFrequentItem = null;
    let leastFrequentItem = null;

    
    frequencyMap.forEach((count, item) => {
        if (!mostFrequentItem || count > frequencyMap.get(mostFrequentItem)) {
            mostFrequentItem = item;
        }
        if (!leastFrequentItem || count < frequencyMap.get(leastFrequentItem)) {
            leastFrequentItem = item;
        }
    });

    return [mostFrequentItem, leastFrequentItem];
};
const isPalindrome = function (palindrome) {
    for( var i = palindrome.length; i > 0; i-- )
    {
        if( palindrome[i] = palindrome.charAt(palindrome.length)-1 )
        {
            return true
        }else{
           return false
        }
    }
};
  

const largestPair = function(numbers){
    var numbers = [1, 3, 5, 8]
var products = [];

for (var i=0; i < numbers.length; i++){
    
    var currentNum = numbers[i];
    var nextNum = numbers [i+1];

    var product = currentNum * nextNum;
    
    if(product){
        products.push(product);
    }


}

var largestProduct = Math.max (...products);


};

const removeParenth = function(newString) {
    let originalString = ('ido(not)liketocode');
    newString = originalString.replace('(','');
    newString = newString.replace(')','');
    
    return newString;
  };

const scoreScrabble = function(scoreScrabble) {
    let letterValue = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 },

word = word.toLowerCase();
for (i = 0; i < word.length; i++) {
    sum += letterValue[word[i].toLowerCase] || 0; 
}
return sum;
  };
