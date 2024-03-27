let a = window.prompt("Enter Your Full Name:");
let f;
let l;
f = a.slice(0,a.indexOf(" "));
l = a.slice(a.indexOf(" ")+1)
window.alert(`Your firstname is ${f} and the lastname is ${l}`);