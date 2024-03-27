let num = [25,20,14,12,36,90,100,78,54,26];
let sq = num.map(function (element){
    return Math.pow(element, 2)
});
console.log(sq);
let even= num.filter(function (element){
return element % 2 ===0;
});
console.log(even);
let add= num.reduce(function(acc, el){
    return acc+el;
});
console.log(add);