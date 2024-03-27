let a = ["ab-cd-ef", "cd-ef-gf", "ef-gh-ij"];
let b= a.map(format);
console.log(b);
function format(element){
const part= element.split("-");
return `${part[1]}/${part[0]}/${part[2]}`;
}