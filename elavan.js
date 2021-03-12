var leter = "0123456789ABCDEF "; // color leter in betwwn this

var color = '#'; // color code start with this

for(var i =0;i<6;i++){
    color += leter[(Math.floor(Math.random() * 16 ))];
}

console.log(color);
