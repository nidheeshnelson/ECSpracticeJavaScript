const ch = document.getElementById("ch");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const sub = document.getElementById("sub");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
sub.onclick= function(){
    if(ch.checked){
h1.textContent=`You are Subscribed`;
    }
    else{
        h1.textContent=`You are not Subscribed`;
    }
    if(p1.checked){
        h2.textContent=`You are UPI`;
    }
    else if(p2.checked){
        h2.textContent=`You are NetBank`;
    }
    else if(p3.checked){
        h2.textContent=`You are Cash`;
    }
    else if(p4.checked){
        h2.textContent=`You are PayPal`;
    }
    else {
        h2.textContent=`You are not paying`;
    }
}
