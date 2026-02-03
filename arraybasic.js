let fruits = ["apple" , "banana" , "orange" , "pineapple"]
let fruits2 = ["waxapple" , "jackfruit" , "guava" , "passion fruit"]

fruits = [...fruits,...fruits2]
fruits.forEach(display);

function display(element){
    console.log(element);
}
