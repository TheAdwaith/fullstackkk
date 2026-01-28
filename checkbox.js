Mycheckbox = document.getElementById("checkbox");
Visa = document.getElementById("visa");
MasterCard = document.getElementById("mastercard");
RuPay = document.getElementById("RuPay");
document.getElementById("submit").onclick = function(){

    if (Mycheckbox.checked){
        document.getElementById("text1").textContent = "You are subscribed";
    }

    else{
        document.getElementById("text1").textContent = "You are not subscribed";
    }

    if (Visa.checked){
        document.getElementById("text2").textContent = "You can pay through Visa";
    }

    else if (MasterCard.checked){
        document.getElementById("text2").textContent = "You can pay through MasterCard";
    }

    if (RuPay.checked){
        document.getElementById("text2").textContent = "You can pay through RuPay";
    }
}