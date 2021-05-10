



/*let promise = new promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('data recived');
    },3000);
})*/




// async keyword with function always return promise
async function getdata(){
    let response = await test();
    console.log(response)
}

function test (){
    setTimeout(()=>{
        return 10;
    },3000);
}
//getdata().then(data => console.log(data))   //getdata().then(console.log) we can use this too

getdata();

