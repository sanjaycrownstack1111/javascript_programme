class Car {
    constructor(name){
        this.name = name;
    }
    static hello(){
        return "hello!";
    }
}

let myCar  = new Car("ford");

document.getElementById('demo').innerHTML = Car.hello();