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


var momsPromise = new Promise(function(resolve, reject){
    console.log(momsPromise);
    momsSavings = 2000;
    priceOfPhone = 60000;
    if(momsSavings > priceOfPhone){
      resolve({
        brand:"iphone",
        model:"6s"
      });
    } else {
      reject("we do not have enough savings. Let us save some more money.");
    }
  });

  console.log(momsPromise,"1");
  
  momsPromise.then(function(value){
    console.log("Hurrey I got this phone as a gift", JSON.stringify((value)));
  });

  console.log(momsPromise,"2");

  momsPromise.catch(function(reason){
      console.log("Mom couldn't buy me the phone because ", reason);
  });

  console.log(momsPromise,"3");
  

  momsPromise.finally(function(){
      console.log("Irrespective of wether my mom buy me a phone or not, I still love her. ");
  });

  console.log(momsPromise,"4");