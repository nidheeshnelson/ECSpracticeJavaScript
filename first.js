function fn() {
    let score =0;
    function scd(pnt){
score -= pnt;
console.log(`decrease point -${pnt}`)
    }
    function sci(pnt){
score += pnt;
console.log(`increase point +${pnt}`)
    }
function getScore(){
    return score;
}
return {scd,sci,getScore};
}
fn().sci(100);
fn().scd(10);
fn().sci(100);
console.log(fn().getScore());