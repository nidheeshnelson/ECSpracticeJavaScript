class a{
    static pi = 3.14;
    static count = 1;

   static area(r){
        console.log(`the radius is ${r} and the area is ${(this.pi*r**2).toFixed(2)}`);
        console.log(`this is ${this.count++}th area finding`);
    }
}
a.area(10);
a.area(20);
a.area(12);
a.area(13);
a.area(25);
a.area(11);
a.area(9);
console.log(a.count-1);