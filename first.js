class a{
constructor(name){
this.name=name;
}
move(speed){
    console.log(`${this.name} can run at a speed of ${speed}`)
}
}
class m extends a{
    constructor(name, job){
        super(name);
        this.job=job;
    }
    do(speed){
        console.log(`${this.name} can do ${this.job}`);
        super.move(speed);
    }
}
const b = new m("Nidheesh Nelson", "Engineer");
b.do(25);