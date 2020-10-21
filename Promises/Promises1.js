/*

Creation of Promises 

new Promise(function(resolve, reject) { ... } );

The call back function in the Promises is called an executor function.

*** Run Code in Chrome Console for better understanding.

*/



// Every Promises as a PromiseStatus and Promise Value. The value can be a string or an Object.
keepsHisWord = true;
promise1 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesnt want to keep his word");
  }
});
console.log(promise1);



// This promise will be pending until it resolves after 10 seconds
promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        message: "The man likes to keep his word",
        code: "aManKeepsHisWord"
      });
    }, 10 * 1000);
  });
  console.log(promise2);



  // Promise rejection example. An unhandled error will show up in Chrome Console and Noe.
  keepsHisWord = false;
promise3 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesn't want to keep his word");
  }
});
console.log(promise3);



/*
As we can see PromiseStatus can have three different values. pending resolved or rejected When 
promise is created PromiseStatuswill be in the pending status and will have PromiseValue as undefined
 until the promise is either resolved or rejected. When a promise is in resolved or rejected states, 
 a promise is said to be settled. So a promise generally transitions from pending state to settled state.


Prototype Methods:all these methods can be applied on an instance of Promise object and all these 
methods return a promise in turn. One or more of the following three methods will be run when a promise 
is settled based on whether they are fulfilled or rejected.


Promise.prototype.catch(onRejected);

Promise.prototype.then(onFulfilled, onRejected);

Promise.prototype.finally(onFinally);

*/


