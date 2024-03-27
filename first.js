let c = 5;
fn(so, c)
function fn(call, a){
    a= a**4;
    call(a);
}
function so(b){
    document.getElementById("h").textContent=`the value is ${b}`;
}