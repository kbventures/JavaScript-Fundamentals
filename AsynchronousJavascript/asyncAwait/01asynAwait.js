/*

async/await is syntactic feature of programming languages that allows an 
asynchronous function to be structured in a way similar to an ordinary
synchronous function

Async functon always returns a promise

*/


// example 1
async function f(){
    return 'Hello World';
}

f();



// example2
async function f1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(true),1000)
    });
}

const var1 = f1();



// example3
async function f2(){
    return Promise.reject(404);
}

const var1 = f2();