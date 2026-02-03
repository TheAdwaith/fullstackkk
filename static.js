class Circle{
     static PI = 3.14;

    static circumference(radius){
        return 2*this.PI * radius;
     }

    static area(radius){
          return this.PI * radius * radius;
     }
}

console.log(Circle.PI)
console.log(Math.floor(Circle.circumference(8)))
console.log(Math.floor(Circle.area(8)))
