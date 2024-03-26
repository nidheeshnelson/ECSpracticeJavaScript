let a ="2";console.log(a, typeof a);
a= Number(a);console.log(a, typeof a);
let b=window.prompt("Enter a number");
b=b+20;
document.getElementById("1").textContent=`${b} is the value but type is ${typeof b}`;
b=b-20;
b=Number(b);
b=b+20;
document.getElementById("2").textContent=`${b} is the value but type is ${typeof b}`;

