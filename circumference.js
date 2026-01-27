let pi = 3.14;
let radius;
circumference = 2 * pi * radius;

document.getElementById("button").onclick = function(){
    radius = document.getElementById("radius").value;
    circumference = 2 * pi * radius;
    document.getElementById("h1").textContent = `Circumference of the Circle is ${circumference}`;
}