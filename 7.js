let S = parseFloat(prompt("Введіть число S:"));
let exponent = parseInt(prompt("Введіть ступінь:"));

if (!isNaN(S) && !isNaN(exponent)) {
    let step = S ** exponent;

    alert(S + " в ступені " + exponent + " = " + step);
} else {
    alert("Будь ласка, введіть коректні числа.");
}