let tmid
function timeout1(){
tmid=setTimeout(()=>window.alert("Hello"),4000);
console.log("Start")
}
function timeout2(){
    clearTimeout(tmid);
    console.log("end")
}