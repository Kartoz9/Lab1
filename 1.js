let walletMoney = parseFloat(prompt("Введіть суму грошей в вашому гаманці:"));
let burgerPrice = parseFloat(prompt("Введіть ціну одного бургера:"));

let numberOfBurgers = Math.floor(walletMoney / burgerPrice);
let change = walletMoney - (numberOfBurgers * burgerPrice);

if (numberOfBurgers > 0) {
  alert("Ви можете купити " + numberOfBurgers + " бургер(ів) і у вас залишиться " + change.toFixed(2) + " грн.");
} else {
  alert("На цю суму ви не можете купити жодного бургера.");
}