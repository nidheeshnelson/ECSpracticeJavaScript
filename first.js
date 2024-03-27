let n = [12,25,85,65,48,4,421,42,6];
let pw=n.map((element)=>Math.pow(element,2));
console.log(pw);
let even=n.filter((el)=>el%2===0);
console.log(even);
let total=n.reduce((ac,el)=>ac+el);
console.log(total);
let b=(el)=>console.log(`hello ${el}`)
b("Nidheesh Nelson")