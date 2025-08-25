
// reduce() läuft das Array durch und fasst alle Werte Schritt für Schritt zu einem einzigen Ergebnis zusammen.
// reduce(accumulator, currentValue, startValue)
// accumulator = Zwischenergebnis, currentValue = aktuelles Element, startValue = Startwert des accumulator
const newNumbers = [1, 3, 5, 7]; 
const newSum = newNumbers.reduce((accumulator, currentValue) => {


console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue
},0);

console.log(newSum);


//Links https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods , https://www.codecademy.com/resources/docs/javascript/methods