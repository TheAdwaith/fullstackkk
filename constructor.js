function Car(make , model , year , color){
    this.make = make,
    this.model = model,
    this.year = year ,
    this.color = color ,
    this.drive = function(){
        console.log(`You are driving a ${color} ${make} ${model}`)
    }
}

const car1 = new Car("Ford" , "Mustang" , "2004" ,"Red");
const car2 = new Car("Porsche" , "911" , "2011" ,"Black");
const car3 = new Car("Lamborghini" , "Huracan" , "2004" ,"Yellow");

car1.drive();
car2.drive();
car3.drive();