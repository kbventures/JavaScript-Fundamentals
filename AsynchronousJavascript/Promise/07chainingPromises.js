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


// calculateSquare(2)
//     .then(value=>{
//         console.log(value);
//     })
//     .then(value2=>{
//         console.log(value2);
//     });



// calculateSquare(2)
//     .then(value=>{
//         console.log(value);
//         return value;
//     })
//     .then(value2=>{
//         console.log(value2);
//     });



// calculateSquare(2)
//     .then(value=>{
//         console.log(value);
//         return 25;
//     })
//     .then(value2=>{
//         console.log(value2);
//     });



// calculateSquare(2)
//     .then(value=>{
//         console.log(value);
//         throw new Error('error');
//     })
//     .then(value2=>{
//         console.log(value2);
//     }, reason =>{
//         console.log('error happened: '+reason );
//     });




// calculateSquare(2)
//     .then(value=>{
//         console.log(value);
//         return calculateSquare(2);
//     })
//     .then(value2=>{
//         console.log(value2);
//     }, reason =>{
//         console.log('error happened: '+reason );
//     });



calculateSquare(2)
    .then(value=>{
        console.log(value);
        return calculateSquare('string');
    })
    .then(value2=>{
        console.log(value2);
    }, reason =>{
        console.log('error happened: '+reason );
    });