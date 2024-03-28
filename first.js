class a{
constructor(age, gender){
    this.age=age;
    this.gender=gender;
}
set age(newAge){
if(typeof newAge === "number" && newAge>0){
    this._age=newAge;
}
else{
    console.error("the age shuld be a number and it is must be greater than 0")
}
}
set gender(newGender){
    if(typeof newGender === "string"){
        this._gender=newGender;
    }
}
get age(){
    return this._age;
}
get gender(){
    return this._gender;
}
}
const p1 = new a(4, "male");
console.log(p1.age);
console.log(p1.gender);
p1.age=25
p1.gender="female";
console.log(p1.age);
console.log(p1.gender);