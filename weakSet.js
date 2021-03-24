let carweakSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model: 'Civic'
}

carweakSet.add(car1);

let car2 = {
    make: 'Hyndai',
    model: 'Creta'
}
carweakSet.add(car2);

console.log(carweakSet);