
//if else condition
let price = window.prompt();
price = Number(price);
let message = price >= 100 ? price-price*10/100 : price;
document.getElementById("h").textContent=message