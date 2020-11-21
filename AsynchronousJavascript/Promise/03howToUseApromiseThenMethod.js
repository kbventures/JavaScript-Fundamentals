/*

You can not exposte PromiseStatus or PromiseValue properties
by console.log(myPromise.value);


We can use then method to access there values. 

ie: .then 


The then method takes 2 arguments: onFulfilled and onRejected
Both of them are functions.  onFulfilled is called when the promises
a sucessfully resolves and only has argument, the fulfillment value. 
onRectec function will be called if the promises is rejected and only has one
argument, the rejection reason.  In both cases they are called
asynchronously. 




*/

// example 1

const myPromise = new Promise(function(resolve, reject){
    resolve('Hello World');
})

myPromise.then(function(value){
    console.log(value);
})


// Promise {<fulfilled>: undefined}
// __proto__: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

// example 2e

const myPromise = new Promise(function(resolve, reject){
    resolve('Hello World');
});

myPromise.then(value =>{
    console.log("This is inside the onFulfilled function");
});

console.log('This is written after myPromise.then');

// This is written after myPromise.then
// This is inside the onFulfilled function
// undefined

// .then resolve or reject gets called after the call stack is empty