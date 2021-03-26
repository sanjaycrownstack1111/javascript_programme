
//syncronise --- one after one happeing

/*const func2 = () =>{
    console.log('fun2 is starting'); 
}


const func1 = () =>{

    console.log('fun1 is starting');
    func2();
    console.log('fun1 is ending');
}

func1();*/


// asynchrosie  --- work with one another

const fun2 = () =>{
    setTimeout( () =>{
        console.log('fun2 is starting');
    },3000);
}
// settimeout comes on asyncronise
const fun1 = () =>{
    console.log('fun1 is starting');
    fun2();
    console.log('fun1 is ending');
}
