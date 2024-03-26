const age = document.getElementById("age")
const sub = document.getElementById("sub")
const out = document.getElementById("out")
let a;
sub.onclick = function(){
a = age.value;
console.log(a)
a=Number(a);
if(a>100){
    out.textContent=`${a} is more than 100`;
}
else if(a==100){
    out.textContent=`You achieve 100`;
}
else if(a==0){
    out.textContent=`You just born ${a}!!`;
}
else if(a<0){
    out.textContent=`You are not born`;
}
else{
    if(a>50){
        out.textContent=`You cover ${a}`;
    }
    else{
        out.textContent=`You are below 50`;
    }

}
}