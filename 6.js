let sum = 0;
let arr = [];

while (true) {
    let input = parseInt(prompt("Введіть число (0 для завершення вводу):"));

    if (isNaN(input)) {
        alert("Це не число. Будь ласка, введіть число.");
        continue;
    }

    if (input === 0) {
        break;
    }

    arr.push(input);
    sum += input;
}

let equation = arr.join(" + ") + " = " + sum;
alert(equation);
