/*

Promise is a special Javascript object that represents an 
eventual result of an asyncronous action

Proxy for a value we don't have yet..


1. Pass a callback

2. Return a promise



Promise object as two internal properties: PromiseStatus & PromiseValue

( Chrome dev tool result view:
    
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined)
)


A promise can be in one of three states: pending, fufilled and rejected

*/





// Example 1
const myPromise = new Promise(function(resolve, reject){
    
});

console.log(myPromise);
// ( Chrome dev tool result view:
    
// Promise {<pending>}
// __proto__: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined



// Example 2 resolve()
const myPromise = new Promise(function(resolve, reject){
    resolve();
});

console.log(myPromise);
// ( Chrome dev tool result view:

// Promise {<fulfilled>: undefined}
// __proto__: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined



// Example 3 reject()

const myPromise = new Promise(function(resolve, reject){
    reject();
});

console.log(myPromise);
// ( Chrome dev tool result view:
    
// Promise {<rejected>: undefined}
// __proto__: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: undefined



//Example 4
const myPromise = new Promise(function(resolve, reject){
    resolve("Value");
});

console.log(myPromise);
// ( Chrome dev tool result view:
    
// Promise {<fulfilled>: "Value"}
// __proto__: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Value"


//Example 5
const myPromise = new Promise(function(resolve, reject){
    reject("reason");
});

console.log(myPromise);
// ( Chrome dev tool result view:
    
// Promise {<rejected>: "reason"}
// __proto__: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: "reason"



