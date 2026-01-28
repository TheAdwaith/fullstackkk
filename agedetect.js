let age;
document.getElementById("submit").onclick = function(){
    age = document.getElementById("input").value;
    age = Number(age);

    if(age>=18){
        document.getElementById("text").textContent = "You are elligible";
    }

    else if(age<=0){
        document.getElementById("text").textContent = "Enter a valid age";
    }

    else{
        document.getElementById("text").textContent = "You are inelligible";
    }

}
