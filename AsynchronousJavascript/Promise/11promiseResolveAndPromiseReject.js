function logToConsole(somePromise){
    somePromise.then(value=>console.log(value));
}

const somePromise = new Promise(
    (resolve,reject)=>resolve('Hello')
);

logToConsole(somePromise);

const value='string';

// This will generarate an error because
// value is not a Promise
// TypeError: somePromise.then is not a function

// logToConsole(value);

//convert any value to Promise
// const resolvedPromise = Promise.resolve(anyValue);
// const rejectedPromise = Promise.reject(anyValue);
const promisifiedValue = Promise.resolve(value);

logToConsole(promisifiedValue);

const rejectedPromise = Promise.reject(value);

// Documentaton recomends this format for rejectedPromise

const rejectedPromise1 = Promise.reject(new Error('some error'));

