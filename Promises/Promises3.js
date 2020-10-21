/*

Since .then can assign bothonFulfilled, onRejected handlers , instead of writing separate .then and .catch we could 
have done the same with with .then It would have looked like below.

But for readability of the code I think it is better to keep them separate.


Promise.prototype.catch(onRejected);

Promise.prototype.then(onFulfilled, onRejected);

Promise.prototype.finally(onFinally);

Notice the promises are handled AFTER the console.log. A good example of the event loop at work.


*/


var momsPromise = new Promise(function(resolve, reject){
    console.log(momsPromise);
    momsSavings = 200000;
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
  
  momsPromise.then(
      function(value){
    console.log("Hurrey I got this phone as a gift", JSON.stringify((value)));
      },
      function(reason){
          console.log("Mom couldn't buy me the phone because ", reason);
      }
);


  console.log(momsPromise,"2");
  

  momsPromise.finally(function(){
      console.log("Irrespective of wether my mom buy me a phone or not, I still love her. ");
  });

  console.log(momsPromise,"3");