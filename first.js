// comparet two objects with their same values
var person ={
    firstName : "Sanjay",
    lastName: "Barman",
    age : 23
}


var person1={
    firstName : "Ritesh",
    lastName: "Kumar",
    age : 24
}



function matches(person,person1){
    return true;
}

console.log(matches(person,person1));