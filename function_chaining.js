var word = "hello";

//word.split("");//// firstly split the word  
//word.reverse(); // then reverse the string  
//word.split("").reverse.join(""); // and join the reverse split word

// the the function happen bcz the word is in the form of array

var reversed = word.split("").reverse().join("");
//reversed = reversed.reverse();
//reversed = reversed.join("");

console.log(reversed); 



var cities = ["delhi"];
cities.push("mumbai").push("goa");// it done
console.log(cities);
