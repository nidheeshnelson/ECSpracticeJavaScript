let age=[1,25,23,2,4,52,89,100,8,14];
let b = age.filter(minor);
console.log(b);
function minor(element){
    return element<18;
}