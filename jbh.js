const findSum =  function(array) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
    }
    return sum;

};

  const findFrequency = function (array) {
    let count = {};

    array.forEach(function(item){
        if (item.hasOwnProperty(item)){
            count[item] += 1;
        } else{
            count[item]=1;
        }

        return ('most: ' + Math.max(count) + ' least: '+ Math.min(count));
        
    });
   
};
const isPalindrome = function(str) {
    var reverseString = str.split('').reverse().join('');

    if str = reverseString{
        return true;
    } else {
        return false;
    }
};


const largestPair = function(array) {
    var numbers = [];
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

return largestProduct;

};

const removeParenth = function(str) {
    newString = newString.replace('(','');
    newString = newString.replace(')','');
    
    return newString;
  };

const scoreScrabble = function(str) {
    let letterValue = [a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 ],
    sum = 0; 
var str = str.toLowerCase();
for (i = 0; i < str.length; i++) {
    sum += letterValue[str[i].toLowerCase] || 0; 
}
return sum;
  };
