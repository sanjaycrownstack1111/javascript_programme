// call method take argument separately
// apply method take arguments as an array

var person ={
    fullName : function(city,country){
        return this.firstName +" " + this.lastName+ " ,"+city + " ,"+country;

    }
}

var person1 ={
    firstName : "john",
    lastName : "Doe"
}
person.fullName.apply(person1,["india", "amarica"]); 
//person.fullName.call(person1,["india", "amarica"]);