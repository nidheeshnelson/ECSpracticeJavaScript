class a{
constructor(product, price){
    this.product=product;
    this.price=price;
}
display(){
    console.log(this.product);
    console.log(this.price.toFixed(2));
}
addTax(tax){
console.log(`the price ${this.price} ofter tax is ${(this.price+tax).toFixed(2)}`);
}
}
const p1 = new a("apple", 100);
const p2 = new a("orange", 50);
p1.display();
p1.addTax(20);
p2.display();
p2.addTax(20);