let a = window.prompt("Enter your full name:");
let b = a.trim().charAt(0).toUpperCase()+a.trim().slice(1).toLowerCase();
window.alert(`Your user name is: ${b}`);