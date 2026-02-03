const Person1 = {
    name : "Jack Shephared" ,
    age : 45 ,
    role : "Doctor" ,
    sayHello : function(){
        console.log(`my name is ${this.name} , im ${this.age} years old and im a ${this.role}`)
    }
}

const Person2 = {
    name : "James Sawyer" ,
    age : 42 ,
    role : "Criminal" ,
    sayHello : function(){
        console.log(`my name is ${this.name} , im ${this.age} years old and im a ${this.role}`)
    }
}

Person1.sayHello();
Person2.sayHello();
