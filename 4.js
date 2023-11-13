let age = parseInt(prompt("Введіть вік (від 1 до 69):"));

let numbers = ["нуль", "один", "два", "три", "чотири", "п'ять", "шість", "сімь", "вісім", "дев'ять", "десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
let decades = ["", "", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят"];

if (age >= 1 && age <= 69) {
  let ageDescription = "";

    if (age < 20) {
        ageDescription = numbers[age];
    } else {
      let units = age % 10;
      let tens = Math.floor(age / 10);
        ageDescription = decades[tens] + (units > 0 ? " " + numbers[units] : "");
    }

    let yearWord = "рік";
    if (age % 10 >= 2 && age % 10 <= 4 && (age < 10 || age > 20)) {
        yearWord = "роки";
    }

    alert(age + " - «" + ageDescription + " " + yearWord + "»");
} else {
    alert("Введіть коректний вік (від 1 до 69).");
}