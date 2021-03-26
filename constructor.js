class Car {
    constructor(name, year){
        this.name = name ;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car("BMW", 2004);
document.getElementById("demo").innerHTML = "My car is "+myCar.age()+" years old";