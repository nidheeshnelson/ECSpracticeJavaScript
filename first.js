let price =[25,45,85,65,9];
let a = price.reduce(add);
console.log(a.toFixed(2));
function add(accu, ele){
    return accu+ele;
}