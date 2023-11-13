do {
    let num1 = parseFloat(prompt("Введіть перше число:"));
    let num2 = parseFloat(prompt("Введіть друге число:"));
    let operator = prompt("Введіть операцію (+, -, *, /):");
  
    let result;
  
    if (!isNaN(num1) && !isNaN(num2) && (operator === '+' || operator === '-' || operator === '*' || operator === '/')) {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    alert("Ділення на нуль неможливе.");
                    continue;
                }
                break;
        }
  
        alert("Результат: " + result);
  
        var continueCalculation = confirm("Бажаєте продовжити обчислення?");
    } else {
        alert("Введені дані некоректні.");
    }
  } while (continueCalculation);