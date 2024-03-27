let n = [1,2,3,4,5,6,7,8,9];
n.forEach(power);
n.forEach(show);
function power(element, index, array){
    array[index]=Math.pow(element, 3);
}
function show(element){
    console.log(element);
}