const label = document.getElementById("n");
const dec = document.getElementById("b1");
const res = document.getElementById("b2");
const inc = document.getElementById("b3");
let count = 0;
console.log(count);
dec.onclick= function(){
    count=count--;
    console.log(count);
    label.textContent=count;
}
res.onclick= function(){
    count=0;
    console.log(count);
    label.textContent=count;
}
inc.onclick= function(){
    count=count++;
    console.log(count);
    label.textContent=count;
}