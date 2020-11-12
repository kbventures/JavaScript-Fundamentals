/* 


The following example demonstrates that the fulfilled state is the final state.


The pending change state can only be changed to fulfilled or rejected and only once.


*/ 



// Example 1
const myPromise = new Promise(function(resolve, reject){
    resolve('value');
    resolve('value');
    reject('reason');
})

console.log(myPromise);

// Promise {<fulfilled>: "value"}
// __proto__: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "value"



// Example 2
const myPromise = new Promise(function(resolve, reject){
    reject('reason');
    resolve('value');
    resolve('value');
   
})

console.log(myPromise);

// Promise {<rejected>: "reason"}
// __proto__: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: "reason"