// Chrome Dev Console example.  Not all callback functions are asynchronous


// function f(callback){
//     setTimeout(()=> callback(),0);
// }

// f(() => console.log('This is a callback'));


// console.log('Hello World!');

// vs


function f(callback){
    callback();
}

f(() => console.log('This is a callback'));


console.log('Hello World!');