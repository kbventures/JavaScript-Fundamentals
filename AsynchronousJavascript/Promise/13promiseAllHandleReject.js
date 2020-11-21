function askFirstDealer(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(8000),3000);
    });
}

// function askSecondDealer(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve(12000),5000);
//     });
// }

function askThirdDealer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(10000),8000)
    });
}




// This example will abandon all result if askSecondDealer is rejected

// function askSecondDealer(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> reject('Not Suitable car'), 5000);
//     });
// }


// Promise.all([askFirstDealer(),askSecondDealer(),askThirdDealer()])
//     .then(prices => { console.log(prices);
// })
//     .catch(error => {
//         console.log(error);
//     })



function askSecondDealer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> reject('Not Suitable car'), 5000);
    });
}

// .catch creates a promises so in this case the array of Promise all is 
// still created. 

Promise.all([askFirstDealer().catch(error => {return error}),askSecondDealer().catch(error => {return error}),askThirdDealer().catch(error =>{return error})])
    .then(prices => { console.log(prices);
})
    .catch(error => {
        console.log(error);
    })


    /*

    (3) [8000, "Not Suitable car", 10000]
0: 8000
1: "Not Suitable car"
2: 10000

*/ 




/*
// This example would reject immedidately!!!!

Promise.all([askFirstDealer().catch(error => {return error}),askSecondDealer().catch(error => {return error}),askThirdDealer().catch(error =>{return error})])
    .then(prices => { console.log(prices),
        
    Promise.reject('rejected for some reason');
})
    .catch(error => {
        console.log(error);
    })

*/






