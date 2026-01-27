let increase;
let decrease;
let reset = 0;
let normal = 0;

document.getElementById("decrease").onclick = function(){
    document.getElementById("h1").textContent = normal--;
}

document.getElementById("reset").onclick = function(){
    normal = 0;
    document.getElementById("h1").textContent = 0;
}

document.getElementById("increase").onclick = function(){
    document.getElementById("h1").textContent = normal++;
}