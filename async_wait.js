

let promise = new promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('data recived');
    },3000);
})



// async keyword with function always return promise
async function getdata(){
    let response = await promise;
    console.log(response)
}

//getdata().then(data => console.log(data))   //getdata().then(console.log) we can use this too

getdata();

