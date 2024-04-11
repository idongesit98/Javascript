function firstFunction(parameters,callback){
    callback();
}
//Promises has three states: Pending,Fulfilled,Rejected

const myPromise = new Promise((resolve,reject) =>{
    const error = false;
    if(!error){
      resolve("Yes! resolved the promise!");  
    }else{
        reject("No! rejected the promise.");
    }// state fulfilled
});
 const myNextPromise = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve("myNextPromise resolved!");
    }, 3000);
 });

myNextPromise.then(value => {
    console.log(value)
})

myPromise.then(value => {
    console.log(value)
});

const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending
console.log(users)

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();//Each one of the thenables returns a promise
})
.then(data => {
    data.forEach(users =>{
        console.log(users)    
    });
})