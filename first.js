function validEmail(email){
   return email.includes("@")&&email.includes(".")?true:false;
}
let email=window.prompt("Enter email id:");
validEmail(email)?window.alert("It is an email id"):window.alert("It is not an email id");