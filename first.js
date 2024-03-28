const p1={
nm : "nn",
ag : 25,
jb : "eng"
}
const p2={
nm : "bj",
ag : 18,
}
function display({nm, ag, jo="unemployed"}){
console.log(`the name is ${nm} and the age is ${ag} and the job is ${jo}`)
}
display(p2);
const {nm,ag,jb="eng"}=p2;
console.log(nm,ag,jb);