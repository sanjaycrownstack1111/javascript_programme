var  data = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("new state")
    },2000)
})

data.then(function(val){
    console.warn(val);
})