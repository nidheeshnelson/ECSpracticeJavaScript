let mark = window.prompt("Enter Your Mark: ");
mark = Number(mark);
let condition = true;
if(mark>100 || mark<0){
window.alert(`${mark} is not a valid number`)
}
else{
switch(condition){
case mark>=90: document.getElementById("h").textContent = `Your mark is ${mark} so your grade is A`;
break;
case mark>=80: document.getElementById("h").textContent = `Your mark is ${mark} so your grade is B`;
break;
case mark>=70: document.getElementById("h").textContent = `Your mark is ${mark} so your grade is C`;
break;
case mark>=60: document.getElementById("h").textContent = `Your mark is ${mark} so your grade is D`;
break;
case mark>=50: document.getElementById("h").textContent = `Your mark is ${mark} so your grade is E`;
break;
default: document.getElementById("h").textContent = `Your mark is ${mark} so your failed and your grade is F`;
break;
}
}