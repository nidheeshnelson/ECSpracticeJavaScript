window.alert("Think a Number for radious");
const pi=3.1413;
console.log(pi);
document.getElementById("s").onclick= function(){
    let r =document.getElementById("r").value
    r=Number(r);
    console.log(r);
    let a = pi*r**2;
    console.log(a);
    document.getElementById("a").textContent=`The area of the circle is ${a}`;
}