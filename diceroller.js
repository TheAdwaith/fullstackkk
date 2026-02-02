function rollDice(){
let numofDice = document.getElementById("numofDice").value;
let dicevalue = document.getElementById("diceValue");
let diceImage = document.getElementById("diceImage");

const value = [];
const images = [];

   for(let i=0;i<numofDice;i++){
    const values = Math.floor((Math.random() * 6) + 1)
    images.push(`<img src="dice_images/${values}.png">`)
    value.push(values);
 }

  dicevalue.textContent = `dice: ${value.join(",")}`;
  diceImage.innerHTML = images.join(" ");


}