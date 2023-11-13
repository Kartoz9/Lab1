let number = prompt('5-значне число')

let digits = number.split('');
let lastNum = digits.pop();
digits.unshift(lastNum)
let resultNum = digits.join('')

alert(resultNum)