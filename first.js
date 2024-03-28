class animals{
    sleep(){
        console.log("is sleeping...")
    }
    watch(){
        console.log("is watching...")
    }
}
class rabit extends animals{
    name = "rabit";
    run(){
        console.log("is running...")
    }
}
class fish extends animals{
    name = "fish";
    swim(){
        console.log("is swimming...")
    }
}
class crow extends animals{
    name = "crow";
    fly(){
        console.log("is flying...")
    }
}
const a = new rabit();
const b = new fish();
const c = new crow();
console.log(a.name);
a.run();
a.watch();
a.sleep();
console.log(b.name);
b.swim();
b.watch();
b.sleep();
console.log(c.name);
c.fly();
c.sleep();
c.watch();