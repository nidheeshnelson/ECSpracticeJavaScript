let name1;
name1 = window.prompt("What is your name");
console.log(name1);
document.getElementById("1").textContent=`Your name is ${name1} so tell me your place`;
let p;
document.getElementById("3").onclick=function(){
p= document.getElementById("2").value
console.log(p);
document.getElementById("4").textContent=`hello ${p} karaa`;
};
