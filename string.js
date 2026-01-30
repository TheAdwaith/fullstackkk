let username = window.prompt("Enter your name: ");

username = username.trim();
let firstLet = username.charAt(0);
let RestLet = username.slice(1);

firstLet = firstLet.toUpperCase();
RestLet = RestLet.toLowerCase();

username = firstLet + RestLet;
console.log(username);