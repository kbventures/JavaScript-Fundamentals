// function calculateSquare(number){
//     const promise = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(typeof number !== 'number'){
//                 return reject(new Error('Argument of type number is expected'));
//             }
//             const result = number * number;
//             resolve(result);
//         },1000);
//     });
//     return promise;
// }



function capitalize(text){
    return text[0].toUpperCase() + text.substr(1);
}

capitalize('test');

//Promisified

function capitalizePromise(text){
    return new Promise(function (resolve, reject){
        if(typeof text !== 'string'){
            return reject(new Error('Argument of type string is expected'));
        }
        const result = text[0].toUpperCase() + text.substr(1);
        return resolve(result);
    })
}

// capitalizePromise('text').then(value => {console.log(value)},
// reason => {console.log(reason)});

capitalizePromise(2).then(value => {console.log(value)}).catch(function(error){
    console.log(`Testing ${error}`);
});

// capitalizePromise(2);








