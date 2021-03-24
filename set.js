let arr = [11,22,34,65,34];
let set = new Set(arr);

set.add('100');
set.add({a:1, b:2});
set.delete(22);
//console.log(arr.size);

//console.log(set);

set.forEach(function(val){
    console.log(val);
});


