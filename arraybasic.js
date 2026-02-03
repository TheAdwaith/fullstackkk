let fruits = ["apple" , "banana" , "orange" , "pineapple"]
let fruits2 = ["waxapple" , "jackfruit" , "guava" , "passion fruit"]

fruits = [...fruits,...fruits2]
fruits.forEach(display);

function display(element){
    console.log(element);
}

let dates = ["2024-4-23" , "2023-12-16" , "2020-7-9"]

const newDate = dates.map(newdates)

function newdates(element){
    date = element.split("-");
    console.log(`${date[2]}-${date[1]}-${date[0]}`);
}
