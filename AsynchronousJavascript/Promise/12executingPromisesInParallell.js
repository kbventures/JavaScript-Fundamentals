function askFirstDealer(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(8000),3000);
    });
}

function askSecondDealer(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(12000),5000);
    });
}

function askThirdDealer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(10000),8000)
    });
}

Promise.all([askFirstDealer(),askSecondDealer(),askThirdDealer()])
    .then(prices => { console.log(prices);
});



Promise.all([1,'string',true]);

/*

Promise {<fulfilled>: Array(3)}
__proto__: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Array(3)
0: 1
1: "string"
2: true
length: 3
__proto__: Array(0)

*/

Promise.all([]);

/*

Promise {<fulfilled>: Array(0)}
__proto__: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Array(0)

*/