function fn(a, b, c, d){
    this.name = a;
    this.car = b;
    this.year = c;
    this.gender = d;
    this.fn1 = ()=>console.log(`your name is ${this.name} 
    and you driving ${this.car}. you a ${this.gender} and born in ${this.year}`);
}
const p1 = new fn("Nidheesh Nelson", "WagnR", 1991, "Male");
const p2 = new fn("Braji UM", "BMW", 1999, "Female");
console.log(p1.name, p1.car, p1.year, p1.gender);
document.getElementById("h3").textContent=p1.fn1(),p2.fn1();