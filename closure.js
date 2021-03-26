var i = 10;
function show(){
    //var j= 20;
    //console.log(j);
    //console.log(i);

    var j = "J a local variable of outer function";
    console.log(j);
    function innerFun(){
        var k = "K a local varable of inner func";
        console.log(k);
        console.log(j);
    }
    innerFun();
}
show();




