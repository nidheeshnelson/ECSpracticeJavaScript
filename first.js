try{
let a =Number(window.prompt("Enter a deviser"));
let b =Number(window.prompt("Enter a divident"));
if(b===0){
    throw new Error("the divident not be zero");
}
if(isNaN(a) || isNaN(b)){
    throw new Error("the value should be a number")
}
let c=a/b;
window.alert(`the division is ${c}`)
}
catch(error){
window.alert(error);
}
finally{
console.log("It allways execute")
}