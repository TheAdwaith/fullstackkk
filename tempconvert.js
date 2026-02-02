let num;
let farenheit;
let celsius;

document.getElementById("submit").onclick = function(){
    if(document.getElementById("input").checked){
        num = Number(document.getElementById("number").value);
        celsius = (num - 32) * 5/9;
        celsius = celsius.toFixed(2);
        document.getElementById("result").textContent = celsius;
    }

    else{
        num = Number(document.getElementById("number").value);
         farenheit =  (num * 9/5) + 32
         farenheit = farenheit.toFixed(2);
        document.getElementById("result").textContent = farenheit;
    }
}