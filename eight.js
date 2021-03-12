// convert specific num in array of digit

// by using map and split
var num = 1234;

// first spletting the num so that we got an array

var arr = String(num).split("").map((num)=>{
    return Number(num);
})

console.log(arr);


// here by using array.form

//geting sting as parameter and typcastin it into an integer

let fun = num =>Number(num);

var arr = Array.from(String(num),fun);

console.log(arr);