let day = parseInt(prompt("Введіть день:"));
let month = parseInt(prompt("Введіть місяць (у числовому форматі):"));
let year = parseInt(prompt("Введіть рік:"));

let date = new Date(year, month - 1, day);

date.setDate(day - 1);
alert("Попередня дата: " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear());
date.setDate(day + 1);
alert("Наступна дата: " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear());