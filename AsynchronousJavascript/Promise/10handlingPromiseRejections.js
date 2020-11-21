/*

Only successful cases
myPromise.then(onFufilled);

Only promise rejections
myPromise.then(undefined, onRejected);

OR

myPromise.catch(onRejected);

*/


function calculateSquare(number){
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof number !== 'number'){
                return reject(new Error('Argument of type number is expected'));
            }
            const result = number * number;
            resolve(result);
        },1000);
    });
    return promise;
}


// calculateSquare(1)
//     .then(value=>{
//         console.log(value);
//         throw new Error('Something went wrong');
//         return calculateSquare(2);
//     })
//     .then(value=>{
//         console.log(value);
//     }, reason => {
//         console.log('error happened: '+reason);
//     });


// calculateSquare(1)
//     .then(value=>{
//         console.log(value);
        
//         return calculateSquare(2);
//     })
//     .then(value=>{
//         throw new Error('Something went wrong');
//         console.log(value);
//     }, reason => {
//         console.log('error happened: '+reason);
//     });



// calculateSquare(1)
//     .then(value=>{
//         console.log(value);
        
//         return calculateSquare(2);
//     })
//     .then(value=>{
//         throw new Error('Something went wrong');
//         console.log(value);
//     })
//     .then(undefined, reason=>{
//         console.log('error happened: '+reason);
//     });

// calculateSquare(1)
//     .then(value=>{
//         console.log(value);
        
//         return calculateSquare(2);
//     })
//     .then(value=>{
//         throw new Error('Something went wrong');
//         console.log(value);
//     })
//     .catch(reason=>{
//         console.log('error happened: '+reason);
//     });


calculateSquare(1)
    .then(value=>{
        console.log(value);
        
        return calculateSquare(2);
    })
    .then(value=>{
         return new Promise((resolve, reject)=>{
             return reject(new Error('Something went wrong'));
         });
        console.log(value);
    })
    .catch(reason=>{
        console.log('error happened: '+reason);
    });